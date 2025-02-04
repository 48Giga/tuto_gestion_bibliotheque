const book = require('../models/book.js')
const asyncHandler = require('express-async-handler')

exports.index = asyncHandler(async (req, res, next) => {
    res.send('Not implemented home page')
})

exports.book_list = asyncHandler(async (req, res, next) => {
    res.send('Not implemented book list')
})

exports.book_detail = asyncHandler(async (req, res, next) => {
    res.send(`Not implemented book detail ${req.params.id}`)
})

exports.book_create_get = asyncHandler(async (req, res, next) => {
    res.send('Not implemented book create GET')
})

exports.book_create_post = asyncHandler(async (req, res, next) => {
    res.send('Not implemented book create POST')
})


exports.book_delete_get = asyncHandler(async (req, res, next) => {
    res.send('Not implemented book delete GET')
})

exports.book_delete_post = asyncHandler(async (req, res, next) => {
    res.send('Not implemented book delete POST')
})


exports.book_update_get = asyncHandler(async (req, res, next) => {
    res.send('Not implemented book update GET')
})

exports.book_update_post = asyncHandler(async (req, res, next) => {
    res.send('Not implemented book update POST')
})