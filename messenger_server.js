const express = require('express')
const app = express()
const port = 3000
const sqlite3 = require("sqlite3").verbose()

const setUpAccountRouterAPI = require('./creat_account_API/account')
const logInAPI = require('./log_in_API/log_in')
const searchFriendAPI = require('./search_friend/search_friend')

app.use("/setUpAccount", setUpAccountRouterAPI)
app.use("/logIn", logInAPI)
app.use("/searchFriend", searchFriendAPI)

global.db = new sqlite3.Database('./Account.db',sqlite3.OPEN_READWRITE,(err) => {
  if(err) {
    console.error(err.message);
  } else {
    console.log('connected to the mydb database to logIn API');
  }
})


app.get('/', (req, res) => {  
  res.send("Server is Operating")
}) 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})