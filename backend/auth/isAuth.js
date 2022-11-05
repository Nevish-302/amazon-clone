const { verify } = require('jsonwebtoken');

const isAuth = (req) => {
    const token = req.cookies.refreshToken
    if(!token) throw new Error (`You Need To Log In`)
    const {userId} = verify(token, process.env.ACCESS_TOKEN_SECRET)
    return {userId};
};

module.exports = {
    isAuth
}