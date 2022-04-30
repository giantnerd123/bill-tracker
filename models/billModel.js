const mongoose = require('../db/connection');

const BillSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        price: Number,
        repeating: Boolean,
        frequency: String,
        lastPayment: Date,
        dueDate: Date,
        paymentURL: String,
        category: String
    }, {timestamps: true}
);

const Bill = mongoose.model('Bill', BillSchema);

module.exports = Bill;