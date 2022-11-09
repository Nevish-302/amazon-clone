const { verify } = require('jsonwebtoken');

const isAuth = async (req) => {
    const token = await req.cookies.refreshToken
    console.log(req.cookies)
    if(!token) throw new Error (`You Need To Log In`)
    const {userId} = verify(token, `process.env.ACCESS_TOKEN_SECRET`)
    return {userId};
};

module.exports = {
    isAuth
}