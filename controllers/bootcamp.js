const express = require("express");

// @desc     Create new bootcamp
// @route    POST /api/v1/bootcamp
// @access   Private
const createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Create a new bootcamp" });
};

// @desc    Get all bootcamp
// @route   GET /api/v1/bootcamp
// @access  Public
const getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Get all bootcamps" });
};
// @desc    Get single bootcamp
// @route   GET /api/v1/bootcamp
// @access  Public
const getBootcampSingle = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Get bootcamps ${req.params.id}` });
};

// @desc    Update bootcamp
// @route   PUT /api/v1/bootcamp
// @access  Private
const updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Update bootcamp ${req.params.id}` });
};

// @desc    Delete bootcamp
// @route   DELETE /api/v1/bootcamp
// @access  Private
const deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
};

module.exports = {
  createBootcamp,
  getBootcamps,
  getBootcampSingle,
  updateBootcamp,
  deleteBootcamp,
};
