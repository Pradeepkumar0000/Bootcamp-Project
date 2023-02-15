const express = require("express");
const app = express();
const dotenv = require('dotenv');
const bootcampRouter = require('./routes/bootcamp')

dotenv.config({path:"./config/.env"});
console.log(process.env)

const port = 5000

app.use(express.json()) //to parse json data
app.use('/api/v1/bootcamp/', bootcampRouter)

app.listen(port, () =>{
    console.log(`Bootcamp app listening at http://localhost:${port} in ${process.env.NODE_ENV}`)
})