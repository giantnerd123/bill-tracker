const express = require('express');
const app = express();
const methodOverride = require('method-override');
const ejs = require('ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use('/public', express.static('public'));

//changing to connection.js for routes
const billController = require('./controllers/billController.js');
app.use(billController);

// app.get('/',(req,res)=>{
//     res.send('this is working')
// });
app.set('view engine', 'ejs');
const port = process.env.PORT || 4001;

app.listen(port, ()=>{
    console.log(`Listening on Port ${port}`)
});