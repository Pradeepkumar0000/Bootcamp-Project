const mongoose = require('mongoose');


const sampleSchema = new mongoose.Schema(
    {
         name: {
            type: String,
            required: true
         },
            age: {
            type: Number,
            required: true
            }
    }

)

mongoose.model( "Sample", sampleSchema)