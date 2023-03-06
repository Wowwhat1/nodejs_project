const Toy = require('../models/Toys')
const { multipleMongooseToObject } = require('../../util/mongoose')

class SiteController {
    // [GET] /
    index(req, res, next) {
        Toy.find({})
            .then(toys => {
                res.render('home', {
                    toys: multipleMongooseToObject(toys)
                })
            })
            .catch(next)
    }

    // [GET] /search
    search(req, res) {
        res.render('search')
    }
}

module.exports = new SiteController;