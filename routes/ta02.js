//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself! 
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const userList = ['Drew', 'Spencer', 'Isabel'];
let userRemoved = false;
let userFound = false;

router.post('/addUser', (req, res, next) => {
    userRemoved = false;

    const foundItemIndex = userList.indexOf(req.body.addUser);
    if (foundItemIndex >= 0) {
        userFound = true;
    } else {
        userFound = false;
        userList.push(req.body.addUser);
    }
    res.redirect('/ta02');
});

router.post('/removeUser', (req, res, next) => {
    userFound = false;
    const foundItemIndex = userList.indexOf(req.body.removeUser);
    if (foundItemIndex >= 0) {
        userList.splice(foundItemIndex, 1);
        userRemoved = false;
    } else {
        userRemoved = true;
    }
    res.redirect('/ta02');
});

router.get('/', (req, res, next) => {
    res.render('pages/ta02', {
        title: 'Team Activity 02',
        userList: userList,
        userRemoved: userRemoved,
        userFound: userFound,
        path: '/ta02', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
});

module.exports = router;