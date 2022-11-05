const cartDetails = require(`../models/user_cart_details`)

const get_orders = async (req, res) => {
    try {
    const userId = isAuth()
    const user_orders = await cartDetails.find({userid : userId})
    if(!user_orders.orders)
    res.send(`There are no orders for this user`)
    res.json({orders : user_orders.orders})}
    catch (err) {
        console.log(err)
        res.send(err)
    }
}

const add_orders = async (req, res) => {
    try {
        const userId = isAuth()
        const {order_s} = await req.body
        for (const order in order_s)
        {
            cartDetails.updateOne(
                {
                    userId : userId,
                },
                {
                    $push: { orders: {productId : order.id, number : order.number}}
                }
            )
        }
    }
        catch (err) {
            console.log(err)
            res.send(err)
        }    
}

const cancel_orders = async (req, res) => {
    try {
        const userId = isAuth()
        const {order_s} = await req.body
        for (const order in order_s)
        {
            cartDetails.updateOne(
                {
                    userId : userId,
                },
                {
                    $pull: { orders: {productId : order.id, number : order.number}}
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
    get_orders, add_orders, cancel_orders
}