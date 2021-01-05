// include libraries
const express = require('express')
const mongoose = require('mongoose')
const auth = require('./lib/auth')

// middleware logging requests
const requestLogger = require('./lib/request_logger')
const errorHandler = require('./lib/error_handler')

// require user router
const userRoutes = require('./routes/authRoutes.js')
const restauRoutes = require('./routes/userRoutes.js')

// connect to mongodb
mongoose.connect('mongodb://localhost/rockup_api', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// instantiate an app
const app = express()

// middleware requests
app.use(express.json())
app.use(auth)
app.use(requestLogger)

// mount the routes from the user router
app.use(authRoutes)
app.use(userRoutes)

// error handler
app.use(errorHandler)

// start app
app.listen(4741, () => console.log('Just go for it!'))
