const mongoose = require('mongoose')

const CommentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter a name'],
    },
    comment: {
      type: String,
      required: [true, 'Please enter a comment'],
    },
  },
  { timestamps: true }
)

const Comment = mongoose.model('Comment', CommentSchema)

module.exports = Comment
