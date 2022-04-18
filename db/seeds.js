const Bill = require('../models/billModel.js');

const billSamples = require('./bill-seeds.json');

Bill.deleteMany({})
.then( () => {
    return Bill.insertMany(billSamples)
})
.then(console.log)
.catch(console.error)
.finally(() => {process.exit()});