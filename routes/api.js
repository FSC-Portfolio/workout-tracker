const router = require("express").Router();
const Workout = require("../models/workout.js");

// Put /api/workouts
// Post /api/workouts
// Get /api/workouts
// Get /api/workouts/range

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
