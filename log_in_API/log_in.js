const express = require('express')
const router = express.Router();
const bodyParser = require('body-parser')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extented: true}))

router.get('/:id', (req, res) => {

    console.log("Log-in Get API called")

    const id = req.params.id.toLowerCase()

    db.get("SELECT PW FROM ACCOUNT WHERE ID = ?",id, (err, row) => {


        if (err) {
            res.json({pw: "invaildID"});
        } else {
            res.json({pw: row.PW});
        }
    })
    
})

module.exports = router;