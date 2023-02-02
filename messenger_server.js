const express = require('express')
const app = express()
const port = 3000
const sqlite3 = require("sqlite3").verbose();
const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extented: true}))

const db = new sqlite3.Database('./Account.db',sqlite3.OPEN_READWRITE,(err) => {
  if(err) {
    console.error(err.message);
  } else {
    console.log('connected to the mydb database');
  }
})

app.post('/', (req, res) => {
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

app.get('/', (req, res) => { // 중복된 아이디 있을 때 API 넘겨주기 
  console.log("API call")
  res.json({test : "test"})
}) 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})