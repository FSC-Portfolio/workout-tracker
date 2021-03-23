const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {type: Date, default: Date.now},
    // exercises: [{type: json}],
    exercises: [{
        type: { type: String, trim: true, required: "Please enter an exercise type."},
        name: { type: String, trim: true, required: "Please enter a name."},
        weight: { type: Number},
        sets: { type: Number},
        reps: { type: Number},
        duration: { type: Number},
        distance: { type: Number}
    }]
  },
  { toJSON: { virtuals: true} }
);

WorkoutSchema.virtual("totalDuration").get(function () {
  // const reducer = (sum, exercise) => sum + exercise.duration;
  // return this.exercises.reduce(reducer());
  return this.exercises.reduce(( sum, exercise ) => {
    return sum + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;