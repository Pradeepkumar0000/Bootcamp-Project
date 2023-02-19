const express = require('express');


// Logger middleware
const logger = (req, res, next) =>{
    console.log(req.method) // get method, put method, post method, delete method
    console.log(req.protocol) // http or https
    console.log(req.get('host')) // localhost:5000
    console.log(req.originalUrl) // /api/v1/bootcamp
    console.log(`Url: ${req.protocol}://${req.get('host')}${req.originalUrl}`)
    next()
}

// get https://localhost:5000/api/v1/bootcamp

module.exports = logger;