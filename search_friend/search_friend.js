const express = require('express')
const router = express.Router();
const bodyParser = require('body-parser')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extented: true}))

router.get('/:myId&:searchId', (req, res) => {

    console.log("search_friend Get API called")

    const myId = req.params.myId.toLowerCase()
    const searchId = req.params.searchId.toLowerCase()

    db.get("SELECT Nickname FROM ACCOUNT WHERE ID = ?", searchId, (err, row) => {
        if (err) {
            res.json({nickname: "invaildID"});
        } else {
            db.run('INSERT INTO FRIENDSRELATIONSHIP(MyID,FriendID,FriendNickname) VALUES(?,?,?)'
            , myId, searchId, row.Nickname, function(err) {
                if (err) {
                    console.log('failed to register')
                    res.json({nickname: "overlap"})
                } else {
                    console.log('success to register')
                    res.json({nickname: "success"})
                }
            })
        }
    })
    
})

module.exports = router;