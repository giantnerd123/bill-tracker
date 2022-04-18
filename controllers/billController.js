const express = require('express');
const router = express.Router();
const Bill = require('../models/billModel.js');

router.get('/', (req,res)=>{
    console.log('here')
    Bill.find({}).then((bills)=>{
        res.render('index', {bills: bills});
    })
});

module.exports = router;