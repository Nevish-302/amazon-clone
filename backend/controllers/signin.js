const user_details = require('../models/user_details.model')
const bcrypt = require('bcrypt')
const {createAccesshToken, createRefreshToken, sendAccessToken, sendRefreshToken} = require(`../auth/tokens`)

const signIn = async (req, res) => {
    const {username, password} =  await req.body
    try {
    const user = await user_details.findOne({email : username})
    if(!user) 
    user = await user_details.findOne({mobileNumber : username})
    if(!user){
    res.send(`User not found`)
}    bcrypt.compare(user.passHash, password, (err, data) => {
        if(err) console.log(err);
        if(data) {
            const accessToken = createAccesshToken(user.id)
            const refreshToken = createRefreshToken(user.id)
            user_details.findOneAndUpdate({email : username}, {refreshToken : refreshToken})
            sendRefreshToken(res, refreshToken)
            sendAccessToken(res, req, accessToken)
        }        
    })
    }
    catch (err) {
        res.send({error : err})
    }
}

module.exports = {
    signIn
}