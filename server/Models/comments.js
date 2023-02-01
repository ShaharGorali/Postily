const mongoose = require("mongoose");

const Comments = mongoose.model(
  "comments",
  mongoose.Schema({
    userId: {
      type: Number,
      required: true,
      min: 1,
      max: 10,
    },
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  })
);

module.exports = Comments;
