const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const books = []

router.post('/addBook', (req, res, next) => {
    books.push({
        "title":req.body.title, 
        "author":req.body.author, 
        "summary":req.body.summary});
    // res.render('pages/prove02/bookinfo', { 
    //     title: 'Prove Activity 02', 
    //     path: '/prove02', // For pug, EJS 
    //     books: books
    // });
    res.redirect('/prove02/bookinfo');
});

router.post('/remove-book', (req, res, next) => {
    books.splice(req.body.deleteBook, 1)
    res.redirect('/prove02/bookinfo');
});

router.get('/',(req, res, next) => {
    res.render('pages/prove02/bookshare', { 
        title: 'Prove Activity 02', 
        path: '/prove02', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
        books: books
    });
});

router.get('/bookinfo',(req, res, next) => {
    res.render('pages/prove02/bookinfo', { 
        title: 'Prove Activity 02', 
        path: '/prove02', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
        books: books
    });
});

module.exports = router;