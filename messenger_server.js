const express = require('express')
const app = express()
const port = 3000
const sqlite3 = require("sqlite3").verbose()

const setUpAccountRouter = require('./creatAccount/account')

app.use("/setUpAccount", setUpAccountRouter)


app.get('/', (req, res) => {  
  res.send("Server is Operating")
}) 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})