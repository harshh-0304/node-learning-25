const express = require("express")
const mongoose = require("mongoose")

const app = express()
app.use(express.json())
const roleRoutes = require ("./src/routes/RoleRoutes")
app.use(roleRoutes)
const UserRoutes = require ("./src/routes/UserRoutes")
app.use(UserRoutes)


mongoose.connect("mongodb://localhost:27017/25_node_internship").then(()=>{
    console.log("database connected....")
})
const PORT = 3000
app.listen(PORT,()=>{
    console.log("server started on port number ",PORT)
})