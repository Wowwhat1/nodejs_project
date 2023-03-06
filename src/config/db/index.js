const mongoose = require('mongoose')
async function connect() {
    try {
        const conn = await mongoose.connect('mongodb://localhost:27017/f8_education_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to database');
        return conn.connection;
    } catch (error) {
        console.error('Failed to connect to database', error);
        process.exit(1);
    }
}

module.exports = { connect }