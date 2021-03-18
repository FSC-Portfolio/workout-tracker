const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    workoutType: {
        type: String,
        trim: true,
        required: "Please enter a workout type."
    },
    duration: {
        type: Number,
        required: "Enter the duration of your workout."
    },
    date: {
        type: Date,
        default: Date.now
    },
    weight: {
        type: Number
    }
    // workoutType - cardio, resistance
    // duration
    //weight / pounds
});

const Workout = mongoose.model("Workout", workoutSchema)

module.exports = Workout;