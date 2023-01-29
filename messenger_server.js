const express = require('express')
const app = express()
const port = 3000
const sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database('./Account.db',sqlite3.OPEN_READWRITE,(err) => {
  if(err) {
    console.error(err.message);
  } else {
    console.log('connected to the mydb database');
  }
})

app.get('/', (req, res) => {
  res.send("<h1>Hello world</h1>")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})