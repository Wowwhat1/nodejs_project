
class NewController {
    // [GET] /new
    index(req, res) {
        res.render('news')
    }
}

module.exports = new NewController;