const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const app = express();
const cors = require("cors");

//middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router); //localhost:5000/books

mongoose
  .connect(
    "mongodb+srv://refka:refka123@cluster0.ig7pxcw.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("connected To Database"))

  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
