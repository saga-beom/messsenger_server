const express = require('express')
const router = express.Router();
const bodyParser = require('body-parser')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extended: true}))

router.get('/:myId', (req, res) => {

    console.log("get_friend_list API called")

    const myId = req.params.myId.toLowerCase()

    db.all('SELECT FriendID, FriendNickname FROM FRIENDSRELATIONSHIP WHERE MyID = ?', [myId], (err, rows) => {
        if(err) {
            console.error(err.message)
        } else {
            const friends = rows.map(row => ({ friendId: row.FriendID, friendNickname: row.FriendNickname}))
            res.send(friends);
        }
    }) 

})

module.exports = router;