const {sign} = require(`jsonwebtoken`)

const createAccessToken = (userId) => {
return sign({userId}, process.env.ACCESS_TOKEN_SECRET, {expiresIn : `15m`,})
}

const createRefreshToken = (token) => {
return sign({userId}, process.env.ACCESS_TOKEN_SECRET, {expiresIn : `7d`})
}

const sendRefreshToken = (req, res, refreshToken) => {
    res.send({
        accessToken, 
    email : req.body.email});

}

const sendAccessToken = (req, res, accessToken) => {
    res.cookie('refreshtoken', token, {
        httpOnly : true,
        path : `/refresh_token`
    })
}

module.exports = {
    createAccessToken, 
    createRefreshToken,
    sendAccessToken,
    sendRefreshToken
}