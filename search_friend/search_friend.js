const express = require('express')
const router = express.Router();
const bodyParser = require('body-parser')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extented: true}))

router.get('/:id', (req, res) => {

    console.log("search_friend Get API called")

    const id = req.params.id.toLowerCase()

    db.get("SELECT Nickname FROM ACCOUNT WHERE ID = ?",id, (err, row) => {

        if (err) {
            res.json({nickname: "invaildID"});
        } else {
            res.json({nickname: row.Nickname});
        }
    })
    
})

module.exports = router;