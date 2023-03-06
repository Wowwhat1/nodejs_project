const mongoose = require('mongoose')
async function connect() {
    try {
        const conn = await mongoose.connect('mongodb+srv://chienhuynh234:WD9yIqIE93yX3aNW@cluster0.hkglw0t.mongodb.net/test', {
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