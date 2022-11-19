const cartDetails = require('../models/user_cart_details')
const {isAuth} = require(`../auth/isAuth`)

const getItems = async (req, res) => {
    const userId = isAuth(req)
     
    const wishList = await cartDetails.find({userId: userId}).then((data) => {
        if (!data.wishList)  {
            console.log("No items in wish list");
            res.status(400).json({msg : "No items in wish list"})
        }
        res.status(200).json(data.wishList);    
    })
}


const addItems = async (req, res) => {
    try {
        const userId = isAuth(req)
        const {item_s} = await req.body
        for (const item in item_s)
        {
            cartDetails.updateOne(
                {
                    userId : userId,
                },
                {
                    $push: { wishList: {productId : item.id}}
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
        const userId = isAuth(req)
        const {item_s} = await req.body
        for (const item in item_s)
        {
            cartDetails.updateOne(
                {
                    userId : userId,
                },
                {
                    $pull: { wishList: {productId : item.id}}
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