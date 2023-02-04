const express = require('express')
const app = express()
const port = 3000

const setUpAccountRouterAPI = require('./creatAccountAPI/account')
const logInAPI = require('./logInAPI/logIn')

app.use("/setUpAccount", setUpAccountRouterAPI)
app.use("/logIn", logInAPI)


app.get('/', (req, res) => {  
  res.send("Server is Operating")
}) 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})