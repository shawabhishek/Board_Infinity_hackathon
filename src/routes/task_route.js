const Task = require("../model/task_model");
const express = require("express");
const router = new express.Router();

//For Creating the tasks
router.post("/task", (req, res) => {
  var newTask = new Task(req.body);
  var date = new Date();
  date.setMinutes(date.getMinutes() + req.body.duration);//It will add extra minutes to the current time
  newTask.expireAt = date;
  newTask.save((err, task) => {
    if (err) res.status(400).send(err);
    
    res.status(201).send(task);
  });
});

//For Listing all the tasks 
router.get("/task", (req, res) => {
  Task.find({}, (err, task) => {
    if (err) res.status(500).send(err);

    res.json(task);
  });
});

module.exports = router;
