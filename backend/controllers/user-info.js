const User = require('../models/user.model')
const {isAuth} = require(`../auth/isAuth`)

const user_info = async (req, res) => {
    const userId = isAuth()
     
    const user = await User.findOne({_id: userId}).then((data) => {
        if (!data)  {
            console.log("Request not found");
            res.status(400).json({msg : "Request not found"})
        }
        console.log(data, id, "hi")
        res.status(200).json(data);    
    })
    
}

module.exports = {user_info}