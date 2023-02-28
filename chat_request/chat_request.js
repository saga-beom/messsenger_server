const express = require('express')
const router = express.Router();
const bodyParser = require('body-parser')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extended: true}))

router.post('/', (req, res) => {

    console.log("chat request API called")

    db.run('INSERT INTO MESSAGE(Sender, Receiver, Message, TimeStamp, IsRead) VALUES(?,?,?,?,?',
    req.body.myId.toLowerCase(), req.body.friendId.toLowerCase(), req.body.message, 
    req.body.timeStamp, req.body.isRead, function (err) {
        
    })


})

module.exports = router;