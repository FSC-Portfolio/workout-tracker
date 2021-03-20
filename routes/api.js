const router = require("express").Router();
const Workout = require("../models/workout.js");
const path = require('path');

router.get('/exercise', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/exercise.html'))
});

router.get("/exercise?id", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
})

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

router.put("/api/workouts/:id", () => {

})

router.post("/api/workouts", () => {
})


router.get("/api/workouts/:range", () => {

})

router.get("/stats", (req, res) => {
  // Direc to the stats page
  res.sendFile(path.join(__dirname, "../public/stats.html"));
})
//
// router.post("/api/transaction", ({ body }, res) => {
//     Workout.create(body)
//         .then(dbTransaction => {
//             res.json(dbTransaction);
//         })
//         .catch(err => {
//             res.status(400).json(err);
//         });
// });
//
// router.post("/api/transaction/bulk", ({ body }, res) => {
//     Workout.insertMany(body)
//         .then(dbTransaction => {
//             res.json(dbTransaction);
//         })
//         .catch(err => {
//             res.status(400).json(err);
//         });
// });
//
// router.get("/api/transaction", (req, res) => {
//     Workout.find({})
//         .sort({ date: -1 })
//         .then(dbTransaction => {
//             res.json(dbTransaction);
//         })
//         .catch(err => {
//             res.status(400).json(err);
//         });
// });

module.exports = router;
