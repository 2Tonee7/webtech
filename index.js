const express = require("express")

const app = express()

app.use(express.static("./public"))

app.get("/ping", (req,res) => {
  res.send("pong")
})

app.listen(8080)
//test