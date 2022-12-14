const products = require('../models/products')

const search = async (req, res) => {
    try {
    const {name} = await req.body
    products.find({title : {'$regex' : `${name}`, '$options' : 'i'}}).then(
        product_s => {
            console.log(`some products were found`)
            res.send({items : product_s})
        }
    )
    }
    catch (err)
    {
        console.log(err)
    }
}

module.exports = {search}