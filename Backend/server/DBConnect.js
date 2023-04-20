const mongoose = require('mongoose');




async function dbConnect(){
    const dbUrl = 'mongodb+srv://shanemaster007:12345678s@cluster0.hpiduij.mongodb.net/?retryWrites=true&w=majority'

    mongoose.connect(dbUrl)
        .then(() => console.log('DB Connected'))
        .catch((err) => console.log(err));
}

module.exports = dbConnect;