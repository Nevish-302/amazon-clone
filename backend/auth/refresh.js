const verify = require(`jsonwebtoken`)
const user_details = require(`../models/user_details.model`)
const {createAccessToken, createRefreshToken, sendRefreshToken} =  require('./tokens')

const refresh = (req, res) => {
    const token = req.cookies.refreshToken
    if(!token) return res.send(accesstoken, ' ')
    let payload = null;
    try {
        payload = verify(token, process.env.ACCESS_TOKEN_SECRET)
    }
    catch (err) {
        return res.send(accesstoken, ' ')
    }
    const user = user_details.findOne({id : payload.userId});
    if (!user) return res.send(accesstoken, ' ')
    if (user.refreshtoken !== token)
    return res.send({ accesstoken: '' });
    const accesstoken = createAccessToken(user._id);
    const refreshtoken = createRefreshToken(user._id);
    user_details.findOneAndUpdate({email : username}, {refreshToken : refreshToken})
    sendRefreshToken(res, refreshtoken);
    return res.send({ accesstoken });
}

module.exports = {
    refresh
}