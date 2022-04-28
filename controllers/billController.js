const express = require('express');
const req = require('express/lib/request');
const router = express.Router();
const Bill = require('../models/billModel.js');

router.get('/', (req,res)=>{
    Bill.find({}).then((bills)=>{
        res.render('index', {bills: bills})
    })
});

router.post('/add', (req,res)=>{
    Bill.create(req.body).then(res.redirect('/'))
});

router.get('/new', (req,res)=>{
    res.render('new')
});

router.delete('/:id', (req,res)=>{
    Bill.findOneAndRemove({_id: req.params.id}).then(res.redirect('/'))
});

router.get('/:id', (req,res)=>{
    const id = req.params.id;
    Bill.findById(id)
      .then((bill)=>{
        res.render('edit', {bill: bill})
      })
      .catch(console.error)
  });

router.put('/:id', (req,res)=>{
    Bill.findOneAndUpdate({_id: req.params.id}, req.body).then(bills=>res.redirect('/'))
});



module.exports = router;