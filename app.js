const express = require("express");
const app = express();
const mongoose = require('mongoose')

// all models
const Bootcamp = require('./models/bootcamp');

// all router
const bootcampRouter = require('./routes/bootcamp');

// custom all middlewears
const errorHandler = require('./middlewares/errorHandler');

const dotenv = require('dotenv');
const colors = require('colors')
const morgan = require('morgan');

dotenv.config({ path: "./config/.env" });
let port = process.env.PORT || 5000;

let mongourl = process.env.MONGO_URL || "mongodb://localhost:27017/practicum"

// connect mongodb:
mongoose.connect(mongourl, {useNewUrlParser: true, useUnifiedTopology: true});

// true case - established
mongoose.connection.on("connected", () => {
  console.log("connected to mongo".bgMagenta);
});

// false case - not established
mongoose.connection.on("error", (err) => {
  console.log("error connecting to mongo", err);
});

app.use(express.json()); //to parse json data
process.env.NODE_ENV == `development` ? app.use(morgan("dev")) : app.use(morgan("combined"));
app.use("/api/v1/bootcamp/", bootcampRouter);
app.use(errorHandler);

app.listen(port, () => {
  console.log(
    `Bootcamp app listening at http://localhost:${port} in ${process.env.NODE_ENV} mode`.blue.bold
  );
});
