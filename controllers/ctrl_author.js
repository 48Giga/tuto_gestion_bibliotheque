const author = require('../models/author.js')
const asyncHandler = require('express-async-handler')

exports.author_list = asyncHandler( async (req, res, next) => {

    const allAuthor = await author.find()
    .sort({family_name: 1})
    .exec()
    res.render('author', {
        title: "Author List",
        list_author: allAuthor 
    })
})

exports.author_detail = asyncHandler(async (req, res, next) => {
    res.send(`Not implemented author_detail ${req.params.id}`)
})

exports.author_create_get = asyncHandler( async (req, res, next) => {
    res.send('Not implemente author get')
})

exports.author_create_post = asyncHandler( async (req, res, next) => {
    res.send('Not implemente author create post')
})


exports.author_delete_get = asyncHandler( async (req, res, next) => {
    res.send('Not: implemente author delete get')
})

exports.author_delete_post = asyncHandler( async (req, res, next) => {
    res.send('Not: implemente author delete post')
})

exports.author_update_get = asyncHandler( async (req, res, next) => {
    res.send('Not: implemente author update get')
})

exports.author_update_post = asyncHandler( async (req, res, next) => {
    res.send('Not: implemented author update post')
})