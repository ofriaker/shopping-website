const mongoose = require('mongoose');
const cartItemSchema = new mongoose.Schema({

    name: {
        type: String,
        require: true
    },
})

const cartItem = mongoose.model('cart', cartItemSchema);
module.exports = cartItem;