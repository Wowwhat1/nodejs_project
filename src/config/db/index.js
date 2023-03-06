const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb+srv://atnstore:atnstore@atn.zihi3wk.mongodb.net/atn_store?retryWrites=true&w=majority', {
            useNewUrlParser : true,
            useUnifiedTopology: true,
        });
        console.log('connect successfully');
    } catch (error) {
        console.log('connect failed!!!');
    }
}

module.exports = { connect };