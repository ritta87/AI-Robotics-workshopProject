
const path = require('path')
require('dotenv').config({path:path.join(__dirname,'.env')})
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const PORT = process.env.PORT || 5000
const app = express()

const connectDB = require("./config/db");
connectDB()
const enquiryRouter = require('../Backend/routes/enquiryRoute')

app.use(cors())
app.use(express.json())

app.use('/api',enquiryRouter)

app.listen(PORT,()=>{
    console.log(`Backend Server listening at http://localhost:${PORT}`)
})
