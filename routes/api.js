const router = require("express").Router();
const Workout = require("../models/workout.js");
const path = require('path');

// Put /api/workouts
// Post /api/workouts
// Get /api/workouts
// Get /api/workouts/range
router.get('/exercise', (req, res) => {
  console.log("called exercise")
  res.sendFile(path.join(__dirname, '../public/exercise.html'))
});

router.get("/exercise?:exerciseId", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
})

router.post("/api/workouts", (req, res) => {
  console.log("called api workouts");
  Workout.find({})
    .sort({ date: -1 })
    .then(dbWorkout => {
      console.log(dbWorkout);
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
})


router.post("/api/transaction", ({ body }, res) => {
    Workout.create(body)
        .then(dbTransaction => {
            res.json(dbTransaction);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.post("/api/transaction/bulk", ({ body }, res) => {
    Workout.insertMany(body)
        .then(dbTransaction => {
            res.json(dbTransaction);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/api/transaction", (req, res) => {
    Workout.find({})
        .sort({ date: -1 })
        .then(dbTransaction => {
            res.json(dbTransaction);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

module.exports = router;
