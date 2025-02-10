const Genre = require('../models/genre.js')
const Book = require('../models/book.js')
const asyncHandler = require('express-async-handler')
const { Promise } = require('mongoose')


exports.genre_list = asyncHandler(async (req, res, next) => {

    const [genre, book_genre] = await Promise.all([
        Genre.findById(req.params.id).exec(),
        Book.find({genre: req.params.id}, 'title summary').exec()
    ])

    if (genre === null) {
        const err = new Error('Erro not found')
        err.status = 404
        next(err)
    }
    

    res.render('genre', {
        title: 'Genre Détail', 
        genre: genre,
        genre_in_book: book_genre
    })
})

exports.genre_detail = asyncHandler(async (req, res, next) => {
    res.send(`Not implemented genre ${req.params.id}`)
})

exports.genre_create_get = asyncHandler(async (req,res, next) => {
    res.send('Not implemented genre create GET')
})

exports.genre_create_post = asyncHandler(async (req, res, next) => {
    res.send('Not implemented genre create POST')
})

exports.genre_delete_get = asyncHandler(async (req, res, next) => {
    res.send('Not implemented genre delete GET')
})

exports.genre_delete_post = asyncHandler(async (req, res, next) => {
    res.send('Not implemented genre delete POST')
})

exports.genre_update_get = asyncHandler(async (req, res, next) => {
    res.send('Not implemented genre update GET')
})


exports.genre_update_post = asyncHandler(async (req, res, next) => {
    res.send('Not implemented genre update POST')
})