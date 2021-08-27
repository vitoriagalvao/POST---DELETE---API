 const express =  require("express")
 const app =  express()

 const contact = require("./routes/index")
const index = require("./routes/index")

app.use(express.json())

app.use("/", index)
app.use("/contatos", contact)

module.exports = app