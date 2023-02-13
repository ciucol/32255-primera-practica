const express = require('express')
const router = require('./router')
const mongoose = require('mongoose')
const morgan = require('morgan')
const { db } = require('./config')
const { userDb, passDb } = db

const app = express()

app.use(express.json())
app.use(morgan('dev'))

router(app)

mongoose.set('strictQuery', false)
mongoose.connect(`mongodb+srv://${userDb}:${passDb}@coderbackend.chfazxy.mongodb.net/?retryWrites=true&w=majority`, error => {
  if (error) {
    console.log(`Cannot connect to db. Error ${error}`)
  }
  console.log('db connected')
})

module.exports = app