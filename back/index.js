const express = require("express");
const { default: mongoose } = require("mongoose");

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded( { extended: true }));
const Product = require('./models/Product');
// const methodOverride = require('method-override');
// app.use(methodOverride('_method'));

mongoose.connect('mongodb://127.0.0.1:27017/products', { useNewUrlParser: true })
    .then(() => {
        console.log("mongo connection open!!");
    }).catch(err => {
        console.log("no connection start");
    })

app.get('/products', async (req, res) => {
    const products = await Product.find({});
    console.log(products);
    //res.render('products/index' , {products});
    res.send(products);
})

app.listen(3001, () => {
    console.log("listening on port 3001!");
})
    
