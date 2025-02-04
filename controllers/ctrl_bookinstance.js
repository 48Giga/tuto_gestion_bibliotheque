const bookInstance = require('../models/bookinstance.js')
const asyncHandler = require('express-async-handler')


exports.bookInstance_list = asyncHandler(async (req, res, next) => {
    res.send('Not implemented bookInstance list')
} )

exports.bookInstance_detail = asyncHandler(async (req, res, next) => {
    res.send(`Not implemented bookInstance detail ${req.body.id}`)
})

exports.bookInstance_create_get = asyncHandler(async (req, res, next) => {
    res.send('Not implemented bookInstance create get')
})

exports.bookInstance_create_post = asyncHandler(async (req, res, next) => {
    res.send('Not implemented bookInstance create post')
})

exports.bookInstance_delete_get = asyncHandler(async (req, res, next) => {
    res.send('Not implemented bookInstance delete GET')
})

exports.bookInstance_delete_post = asyncHandler(async (req, res, next) => {
    res.send('Not implemented bookInstance delete POST')
})

exports.bookInstance_update_get = asyncHandler(async (req, res, next) => {
    res.send('Not implemented bookInstance update GET')
})

exports.bookInstance_update_post = asyncHandler(async (req, res, next) => {
    res.send('Not implemented bookInstance update POST')
})