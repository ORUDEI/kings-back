const mongoose = require('mongoose')

const CommentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter a name'],
      maxlength: [15, 'Comentario no puede exceder los 20 caracteres '],
    },
    comment: {
      type: String,
      required: [true, 'Please enter a comment'],
      maxlength: [100, 'Comentario no puede exceder los 100 caracteres '],
    },
  },
  { timestamps: true }
)

const Comment = mongoose.model('Comment', CommentSchema)

module.exports = Comment
