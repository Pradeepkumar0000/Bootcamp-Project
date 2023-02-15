const express = require("express");
const bootcampRouter = express.Router();

const {
  createBootcamp,
  getBootcamps,
  getBootcampSingle,
  updateBootcamp,
  deleteBootcamp,
} = require("../controllers/bootcamp");

bootcampRouter.route("/").post(createBootcamp).get(getBootcamps);

bootcampRouter
  .route("/:id")
  .get(getBootcampSingle)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

module.exports = bootcampRouter;

// // create a new bootcamp
// bootcampRouter.post('/',(req, res)=>{
// res.status(200).json({success: true, msg:'Create a new bootcamp'})

// })

// // get all bootcamp
// bootcampRouter.get('/', (req, res) =>{
//     res.status(200).json({success: true, msg:'Get all bootcamp'})

// })

// // get a single bootcamp
// bootcampRouter.get('/:id',(req, res) =>{
//     res.status(200).json({success: true, msg:`Get bootcamp ${req.params.id}`})

// })
// // Update a single bootcamp
// bootcampRouter.put('/:id',(req, res) =>{
//     res.status(200).json({success: true, msg:`Update bootcamp ${req.params.id}`})

// })
// // delete a single bootcamp
// bootcampRouter.delete('/:id',(req, res) =>{
//     res.status(200).json({success: true, msg:`Delete bootcamp ${req.params.id}`})

// })
