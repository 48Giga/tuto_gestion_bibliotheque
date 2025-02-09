const Book = require('../models/book.js')
const Author = require('../models/author.js')
const BookInstance = require('../models/bookinstance.js')
const Genre = require('../models/genre.js')

const asyncHandler = require('express-async-handler')

exports.index = asyncHandler(async (req, res, next) => {
   const [numBook, numBookInstance, availableBookInst, numAuthor, numGenre] = 
   await Promise.all([
    Book.countDocuments({}).exec(),
    Author.countDocuments({}).exec(),
    BookInstance.countDocuments({}).exec(),
    Genre.countDocuments({}).exec()
   ])

   res.render('index', {
    
    title: "Local Library home",
    book_count: numBook,
    book_instance: numBookInstance,
    book_instance_available: availableBookInst,
    author_count: numAuthor,
    genre_count: numGenre

   })
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