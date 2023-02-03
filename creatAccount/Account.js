const express = require("express");
const router = express.Router();
const sqlite3 = require("sqlite3").verbose()
const bodyParser = require('body-parser')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extented: true}))

const db = new sqlite3.Database('./Account.db',sqlite3.OPEN_READWRITE,(err) => {
    if(err) {
      console.error(err.message);
    } else {
      console.log('connected to the mydb database');
    }
  })

router.get("/", (req, res) => {
    console.log("API call")
    res.json({test : "test"})
});

router.post('/', (req, res) => {
    console.log("POST API called")
    db.run('INSERT INTO ACCOUNT(ID,PW,Nickname,Email) VALUES(?,?,?,?)', 
    req.body.id.toLowerCase(), req.body.pwd, 
    req.body.nickname, req.body.email.toLowerCase(), function (err) {
      if (err) {
        res.json({error : "overlap"})
      } else {
        res.json({error : "None"})
      }
    });
  })

module.exports = router;