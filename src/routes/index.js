const newsRouter = require('./news')
const siteRouter = require('./sites')
const meRouter = require('./me')
const toyRouter = require('./toys')
function route(app) {
    app.use('/news', newsRouter)
    app.use('/toys', toyRouter)
    app.use('/me', meRouter)
    app.use('/', siteRouter)
}

module.exports = route;