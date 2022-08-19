const express = require('express')
const dotenv = require('dotenv')
const path = require('path')
const morgan = require('morgan')
const app = express()
const addPass = require('passport')
const passport = require('./module/passport.js')
const connectDB = require("./module/db")
const session = require('express-session')
dotenv.config( {path: './module/config.env'})
require('./module/passport')
connectDB()

if (process.env.NODE_ENV === "development") {
app.use(morgan('dev'))
}
app.set('view engine', '.ejs')
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
   // store
}))
 app.use(addPass.initialize())
app.use(addPass.session())
app.use(express.static(path.join(__dirname, 'public')))
const PORT = process.env.PORT || 3000



app.use('/', require('./router/router.js'))
app.use('/auth', require('./router/auth.js'))







app.listen(PORT , console.log(`Server running on ${process.env.NODE_ENV} mode on port ${PORT}`))