const { default: mongoose } = require("mongoose");

const Product = require('./models/product')

mongoose.connect('mongodb://127.0.0.1:27017/products', { useNewUrlParser: true })
    .then(() => {
        console.log("mongo connection open!!");
    }).catch(err => {
        console.log("no connection start");
    })

const seedProducts = [
    {
        name: 'Computer',
        price: '5000',
        description: "2 CPU 8 GB Ram",
        productImageUrl: 'https://images.beta.azrieli.com/_images_/2/e/7/f/2e7f8bcd86e6dcfe5fc8b28f5ca96fc1ff4590a8_83509ed2bba94eaeb212c8afe87436b0.jpg?width=500&height=676.9547325102881&func=bound&bg_color=auto&trim=5&fit_enlarge=1'
      },
      {
        name: 'Phone',
        price: '4000',
        description: "Iphone 13 pro",
        productImageUrl: 'https://img.ksp.co.il/item/226976/b_1.jpg?v=5'
      },
      {
        name: 'Ipad',
        price: '2500',
        description: "Ipad X",
        productImageUrl: 'https://img.ksp.co.il/item/147307/b_1.jpg?v=5'
      },
      {
        name: 'TV',
        price: '6000',
        description: "50X50 size",
        productImageUrl: 'https://d2d22nphq0yz8t.cloudfront.net/6cbcadef-96e0-49e9-b3bd-9921afe362db/https://www.payngo.co.il/media/catalog/product/cache/142fd3372bf734bc9f90e710566b5dac/2/6/2615955.jpg/mxw_2048,f_auto'
      },
      {
        name: 'Watch',
        price: '1500',
        description: "6 series watch",
        productImageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/FQKW2?wid=1673&hei=1353&fmt=jpeg&qlt=95&.v=1517334319257'
      }

]
Product.insertMany(seedProducts)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })