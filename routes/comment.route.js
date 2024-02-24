const express = require('express')
const router = express.Router()
const {
  getComments,
  getSingleComment,
  addComment
} = require('../controllers/comment.controller.js')

router.get('/', getComments)

router.get('/:name', getSingleComment)

router.post('/', addComment)

module.exports = router
