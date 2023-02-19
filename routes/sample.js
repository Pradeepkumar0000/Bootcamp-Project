const express = require("express");
const sampleRouter = express.Router();
const mongoose = require("mongoose");
const Sample = mongoose.model("Sample");

// create a post api to store name and age in database
sampleRouter.post("/", (req, res) => {
  const { name, age } = req.body;
  if (!name || !age) {
    return res.status(422).json({ error: "Please add all the fields" });
  }
  const sample = new Sample({
    name,
    age,
  });
  sample
    .save()
    .then((result) => {
      res.json({ sample: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

sampleRouter.get("/:name", (req, res)=>{
    Sample.find({name: req.params.name})
    .then(sample => {
        res.json({sample})
    })
    .catch(err => {
        console.log(err)
    })
})

module.exports = sampleRouter;
