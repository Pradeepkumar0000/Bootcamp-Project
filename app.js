const express = require("express");
const app = express();
const dotenv = require('dotenv');

dotenv.config({path:"./config/.env"});
console.log(process.env)

const port = 5000

app.listen(port, () =>{
    console.log(`Bootcamp app listening at http://localhost:${port} in ${process.env.NODE_ENV}`)
})