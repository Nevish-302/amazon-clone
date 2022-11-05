const cartDetails = require(`../models/user_cart_details`)

const getItems = async (req, res) => {
    try {
    const userId = isAuth()
    const user_orders = await cartDetails.find({userid : userId})
    if(!user_orders.cart)
    res.send(`There are no orders for this user`)
    res.json({orders : user_orders.cart})}
    catch (err) {
        console.log(err)
        res.send(err)
    }
}

const addItems = async (req, res) => {
    try {
        const userId = isAuth()
        const {item_s} = await req.body
        for (const item in item_s)
        {
            cartDetails.updateOne(
                {
                    userId : userId,
                },
                {
                    $push: { cart: {productId : item.id, number : item.number}}
                }
            )
        }
    }
        catch (err) {
            console.log(err)
            res.send(err)
        }    
}

const removeItems = async (req, res) => {
    try {
        const userId = isAuth()
        const {item_s} = await req.body
        for (const item in item_s)
        {
            cartDetails.updateOne(
                {
                    userId : userId,
                },
                {
                    $pull: { cart: {productId : item.id, number : item.number}}
                }
            )
        }
    }
        catch (err) {
            console.log(err)
            res.send(err)
        }    
}

module.exports = {
    getItems, addItems, removeItems
}