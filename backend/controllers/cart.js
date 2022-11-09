const cartDetails = require(`../models/user_cart_details`)
const {isAuth} = require(`../auth/isAuth`)

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
        const userId = await isAuth(req)
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
        console.log(`The item has been added successfully`)
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
        console.log(`The item has been removed successfully`)
    }
        catch (err) {
            console.log(err)
            res.send(err)
        }    
}

module.exports = {
    getItems, addItems, removeItems
}