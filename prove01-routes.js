const express = require('express');
const router = express.Router();
const fs = require('fs');

//let userInputArray  = ["User 1", "User 2", "User 3"];
//let userList = ["User 1", "User 2", "User 3"];

router.get('/', (req, res, next) => {
    res.render('pages/prove01/prove01', {
        title: 'Prove 01 Assignment',
        path: '/prove01'
    })
});

router.get('/users', (req, res, next) => {
    const userList = JSON.parse(fs.readFileSync('userList.json'));
    res.render('pages/prove01/allusers', {
        title: 'Prove 01 Assignment',
        path: '/prove01',
        userData: userList
    })
});

router.post('/create-user', async (req, res, next) => {
    // don't need body because the username info is already stored in req
    // extract data from req.body.username
    const user = req.body.username;
    const userList = JSON.parse(fs.readFileSync('userList.json'));
    userList.push(user);
    fs.writeFileSync('userList.json', JSON.stringify(userList));
    console.log(userList);
    // keep user on the original page
    res.redirect('/');

})

module.exports = router;