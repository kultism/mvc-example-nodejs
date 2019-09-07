const express = require('express')
const mongoose = require('mongoose')
const app = express()

// Models
mongoose
  .connect('mongodb+srv://cursor:academy@cluster0-nku3w.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('Connected to DB')
  })
  .catch(err => {
    console.log('Error connecting to DB', err)
  })

// })
app.use(express.urlencoded({ extended: true })) // formdate
app.use(express.json()) // parse json

// Controllers
const UserControl = require('./controllers/user-control')

// Routes
app.post('/api/user/create', UserControl.create)
app.post('/api/user/update', UserControl.update)
app.get('/api/user/get', UserControl.get)

// Start server
app.listen(1337, () => console.log('Server has started on port 1337'))
