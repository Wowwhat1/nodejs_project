const path = require('path')
const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override')
const handlebars = require('express-handlebars')
const {json} = require("express");
const app = express()
const PORT = process.env.PORT || 1234;

const route = require('./routes')
const db = require('./config/db')

// Connect to db
db.connect()

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({
    extended: true
}))
app.use(json())

app.use(methodOverride('_method'))

// HTTP logger
app.use(morgan('combined'))

// Template engine
app.engine('hbs', handlebars.engine({
    extname: '.hbs',
    helpers: {
        sum: (a, b) => a + b
    }
}))
app.set('view engine','hbs')
app.set('views', path.join(__dirname, 'resources', 'views'))

// Routes init
route(app)

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})