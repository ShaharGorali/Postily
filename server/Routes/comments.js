const express = require("express");
const router = express.Router();
const Comments = require("../Models/comments");

// // === Get comments by userID === //
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const comments = await Comments.find({ userId: id });
  res.status(200).send(comments);
});

// // === Post comments to DB === //
router.post("/", async (req, res) => {
  const body = req.body;
  try {
    body.forEach((comment) => {
      const newComment = new Comments({
        userId: comment.userId,
        title: comment.title,
        body: comment.body,
        id: comment.id,
      });
      newComment.save();
    });
    console.log(1);
  } catch (err) {
    res.status(400).send(err.message);
  }
});
module.exports = router;
