const express = require('express')
const app = express()
const port = 3000
const http = require('http').createServer(app)
const sqlite3 = require("sqlite3").verbose()
const io = require('socket.io')(http)

const setUpAccountRouterAPI = require('./creat_account_API/account')
const logInAPI = require('./log_in_API/log_in')
const searchFriendAPI = require('./search_friend/search_friend')
const getFriendList = require('./get_freind_list/get_friend_list')

const userSockets = {};

app.use("/setUpAccount", setUpAccountRouterAPI)
app.use("/logIn", logInAPI)
app.use("/searchFriend", searchFriendAPI)
app.use("/getFriendList", getFriendList)

global.db = new sqlite3.Database('./Account.db',sqlite3.OPEN_READWRITE,(err) => {
  if(err) {
    console.error(err.message);
  } else {
    console.log('connected to the mydb database to logIn API');
  }
})

io.on('connection', (socket) => {
  console.log('a user connected')

  socket.on('register', (userId) => {
    userSockets[userId] = socket.id
    console.log(`user ${userId} registered with socket id ${socket.id}`)
  })

  socket.on('chat message', (data) => {
    const receiverSocketId = userSockets[data.receiver]
    console.log('sender: ' + data.sender.toLowerCase());
    console.log('receiver: ' + data.receiver);
    console.log('msg: '+ data.msg);
    if (receiverSocketId) {
      io.to(userSockets[data.sender.toLowerCase()]).emit('chat message', data)
      io.to(receiverSocketId).emit('chat message', data)
    } else {
      console.log(`receiver ${data.receiver} is not registered`)
    }
    
  });

  socket.on('disconnect', () => {
    console.log('user disconnected with socket id: ' + socket.id);
  });
})

http.listen(port, () => {
  console.log(`listening on *: 3000`)
})

app.get('/', (req, res) => {  
  res.send("Server is Operating")
}) 

