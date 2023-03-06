const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')

mongoose.plugin(slug)
const Schema = mongoose.Schema

const Toy = new Schema({
    name: { type: String, maxLength: 255, required: true },
    description: { type: String, maxLength: 600, required: true },
    price: { type: String, maxLength: 100, required: true },
    image: { type: String, maxLength: 700 },
    slug: { type: String, slug: 'name', unique: true }
}, {
    timestamps: true,
})

module.exports = mongoose.model('Toy', Toy)