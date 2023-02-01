const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const comments = require("./Routes/comments");


mongoose.set("strictQuery", true);
mongoose
  .connect("mongodb://127.0.0.1:27017/comments")
  .then(() => console.log("Connected to MongoDB database"))
  .catch((er) => "Couldnt connect to MongoDB database");
console.log(`this is the node env ${process.env.NODE_ENV}`);
console.log(app.get("env"));
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

app.use("/api/commentsly", comments);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
