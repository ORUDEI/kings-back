const Comment = require('../models/comment.model.js')

const getComments = async (req, res) => {
  try {
    const comments = await Comment.find({}).sort({ createdAt: -1 });
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSingleComment = async (req, res) => {
  try {
    const { name } = req.params
    const comments = await Comment.find({ name: name })
    res.status(200).json(comments)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const addComment = async (req, res) => {
    console.log('entre')
  try {
    const comment = await Comment.create(req.body)
    console.log(comment,'el comentario')
    res.status(200).json(comment)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = { getComments, getSingleComment, addComment }
