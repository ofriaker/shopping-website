const express = require("express");
const { default: mongoose } = require("mongoose");
const cartItem = require("./models/cartItem");
const router = express.Router()
const Product = require('./models/Product');

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

router.get('/products', async (req, res) => {
    const products = await Product.find({});
    console.log(products);
    //res.render('products/index' , {products});
    res.send(products);
})

router.post("/cart", jsonParser, async (req, res) => {
    console.log(req.body);
    cartItem.create(req.body, (err,data) => {
        if(err) console.log(err)
        else res.send(data);
    })
})

// router.get("/cart", async (req, res) => {
// 	const newCartItem = await cartItem.find({});
// 	res.send(newCartItem);
// })

module.exports = router;