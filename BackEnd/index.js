const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = express()

dotenv.config()

mongoose.set('strictQuery', false)

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true}).then(()=>{
    console.log("Connected to MongoDB")
}).catch((err) => console.log(err))

app.listen(8800,()=>{
    console.log("BackEnd Server is Running")
})