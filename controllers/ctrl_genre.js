const genre = require('../models/genre.js')
const asyncHandler = require('express-async-handler')


exports.genre_list = asyncHandler(async (req, res, next) => {
    res.send('Not implemented genre list')
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