const Toy = require('../models/Toys')
const { mongooseToObject } = require('../../util/mongoose')

class ToyController {
    // [GET] /toys/:slug
    show(req, res, next) {
        Toy.findOne({ slug: req.params.slug })
            .then(toy =>
                res.render('toys/show.hbs', { toy: mongooseToObject(toy)})
            )
            .catch(next)
    }

    // [GET] /toys/create
    create(req, res, next) {
        res.render('toys/create')
    }

    // [POST] /toys/store
    store(req, res, next) {
        const toy = new Toy(req.body)
        toy.save()
            .then(() => res.redirect('/'))
            .catch(error => {

            })

        res.send('Save')
    }

    // [GET] /toys/:id/edit
    edit(res, req, next) {
        const slug = req.params.slug; // convert object to string
        Toy.findById(slug)
            .then(toy => res.render('toys/edit', {
                toy: mongooseToObject(toy)
            }))
            .catch(next)
    }
}

module.exports = new ToyController;