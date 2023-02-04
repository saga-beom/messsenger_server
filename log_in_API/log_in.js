const express = require('express')
const router = express.Router();
// const sqlite3 = require("sqlite3").verbose()
const bodyParser = require('body-parser')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extented: true}))

// const db = new sqlite3.Database('./Account.db',sqlite3.OPEN_READWRITE,(err) => {
//     if(err) {
//       console.error(err.message);
//     } else {
//       console.log('connected to the mydb database to logIn API');
//     }
// })

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