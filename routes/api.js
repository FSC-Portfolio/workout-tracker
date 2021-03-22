const router = require("express").Router();
const Workout = require("../models/workout.js");
const path = require('path');

// Get all exercises.
router.get('/exercise', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/exercise.html'))
  // res.redirect("/exercise.html");
});

// Get all stats
router.get('/stats', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/stats.html'))
  // res.redirect("/exercise.html");
});

// Get specific exercise
router.get("/exercise?id", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
})

// Get all workouts
router.get("/api/workouts", (req, res) => {
  Workout.find()
    .sort({ day: 1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// Update specific exercise
router.put("/api/workouts/:id", (res, req) => {
  // workout query
  Workout.findByIdAndUpdate(req.params.id, {$push: {exercises: req.body}}, {new: true}, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    };
  });
})

// Create workout
router.post("/api/workouts", ({body}, res) => {
  Workout.create(body).then(dbWorkout => {
    res.json(dbWorkout);
  }).catch(err => {
    res.status(400).json(err);
  });
})

// Get workouts within range.
router.get("/api/workouts/range", (req, res) => {
  Workout.find({
    // day: { $gte: req.params.range[0], $lte: req.params.range[1] }
  })
    // .sort({ day: 1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
