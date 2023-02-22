const express = require('express')
const router = express.Router();
const bodyParser = require('body-parser')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extented: true}))

router.get('/:myId', (req, res) => {

    console.log("get_friend_list API called")

    const myId = req.params.myId.toLowerCase()

    db.all('SELECT FriendNickname FROM FRIENDSRELATIONSHIP WHERE MyID = ?', [myId], (err, rows) => {
        if(err) {
            console.error(err.message)
        } else {
            const nicknames = rows.map(row => row.FriendNickname);
            console.log(nicknames);
            res.json({ nicknames });
        }
    }) 

})

module.exports = router;