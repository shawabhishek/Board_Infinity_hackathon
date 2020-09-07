const Task = require("../model/task_model");
const express = require("express");
const router = new express.Router();

router.post("/task", (req, res) => {
  let newTask = new Task(req.body);
  newTask.save((err, task) => {
    if (err) res.status(400).send(err);

    res.status(201).send(task);
  });
});

router.get("/task", (req, res) => {
  Task.find({}, (err, task) => {
    if (err) res.status(500).send(err);

    res.json(task);
  });
});

module.exports = router;
