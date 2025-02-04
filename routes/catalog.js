const express = require('express')
const router = express.Router()

/// INCLUDE DES CONTROLLERS ///
const bookController = require('../controllers/ctrl_book.js')
const authorController = require('../controllers/ctrl_author.js')
const bookInstanceController = require('../controllers/ctrl_bookinstance.js')
const genreController = require('../controllers/ctrl_genre.js')

/// BOOK ROUTE ///

router.get('/', bookController.index) //home page
router.get('/book', bookController.book_list)
router.get('/book/create', bookController.book_create_get)
router.get('/book/:id', bookController.book_detail)
router.get('/book/:id/delete', bookController.book_delete_get)
router.get('/book/:id/update', bookController.book_update_get)

router.post('/book/create', bookController.book_create_post)
router.post('/book/:id/delete', bookController.book_delete_post)
router.post('/book/:id/update', bookController.book_update_post)

/// AUTHOR ///

router.get('/author', authorController.author_list)
router.get('/author/:id', authorController.author_detail)
router.get('/author/create', authorController.author_create_get)
router.get('/author/:id/update', authorController.author_update_get)
router.get('/author/:id/delete', bookController.book_delete_get)

router.post('/author/create', authorController.author_create_post)
router.post('/author/:id/update', authorController.author_update_post)
router.post('/author/:id/delete', authorController.author_delete_post)


/// BOOKINSTANCE ///

router.get('/bookins', bookInstanceController.bookInstance_list)
router.get('/bookins/:id', bookInstanceController.bookInstance_detail)
router.get('/bookins/create', bookInstanceController.bookInstance_create_get)
router.get('/bookins/:id/update', bookInstanceController.bookInstance_update_get)
router.get('/bookins/:id/delete', bookInstanceController.bookInstance_delete_get)

router.post('/bookins/create', bookInstanceController.bookInstance_create_post)
router.post('/bookins/:id/update', bookInstanceController.bookInstance_update_post)
router.post('/bookins/:id/delete', bookInstanceController.bookInstance_delete_post)

/// GENRE ///

router.get('/genre', genreController.genre_list)
router.get('/genre/:id', genreController.genre_detail)
router.get('/genre/create', genreController.genre_create_get)
router.get('/genre/:id/update', genreController.genre_update_get)
router.get('/genre/:id/delete', genreController.genre_delete_get)

router.post('/genre/create', genreController.genre_create_post)
router.post('/genre/:id/update', genreController.genre_update_post)
router.post('/genre/:id/delete', genreController.genre_delete_post)


module.exports = router