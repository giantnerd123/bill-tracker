const mongoose = require('mongoose');

const mongoURI = 
    process.env.NODE_ENV === 'production'
        ? process.env.DB_URL
        : 'mongodb+srv://payneskyler:hellotest@cluster0.ovg08.mongodb.net/BillTracker?retryWrites=true&w=majority'

mongoose
    .connect(mongoURI)
    .then((instance)=>
        console.log(`Connected to ${instance.connections[0].name}`))
    .catch((err)=>
        console.log(`Connection to db failed due to: ${err}`));

module.exports = mongoose;