const express = require(`express`)
const {sign} = require(`jsonwebtoken`)

const createAccessToken = (userId) => {
return sign({userId}, `process.env.ACCESS_TOKEN_SECRET`, {expiresIn : `15m`,})
}

const createRefreshToken = (userId) => {
return sign({userId}, `process.env.ACCESS_TOKEN_SECRET`, {expiresIn : `7d`})
}

const sendAccessToken = (res, accessToken) => {
    res.send({accessToken});

}

const sendRefreshToken = (res, refreshToken) => {
    res.cookie('refreshToken', refreshToken, {
        httpOnly : true,
        path : `/refresh_token`,
        secure: false,
    })
    console.log(`Cookie is set`)
}

module.exports = {
    createAccessToken, 
    createRefreshToken,
    sendAccessToken,
    sendRefreshToken
}