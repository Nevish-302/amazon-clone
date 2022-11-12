const products1 = require('../models/products1')

const search1 = async (req, res) => {
    try {
    const {name} = await req.body
    products1.find({name : {'$regex' : `${name}`, '$options' : 'i'}}).then(
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

module.exports = {search1}