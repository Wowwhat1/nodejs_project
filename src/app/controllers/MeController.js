const Toy = require('../models/Toys')
const { multipleMongooseToObject } = require('../../util/mongoose')

class MeController {
    // [GET] /me/stored/toys
    storedToys(req, res, next) {
        Toy.find({})
            .then(toys => res.render('me/stored-toys', {
                toys: multipleMongooseToObject(toys)
            }))
            .catch(next)
    }
}

module.exports = new MeController;