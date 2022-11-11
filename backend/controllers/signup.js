const user_details = require('../models/user_details.model')
const user_cart_details = require(`../models/user_cart_details`)
const bcrypt = require('bcrypt')

const signUp = async (req, res) => {
    const {name, mobile, email, password} = await req.body
    console.log(password)
    const saltrounds = 10
    bcrypt.hash(password, saltrounds, (err, hash) => {
    const user = new user_details({name : name, email : email, mobileNumber : mobile, passHash : hash})
    user.save().then(use => {
        console.log(`${use} has registered successfully`)
    }).catch(err => {console.log(`unable to register`, err)})
    const {_id} = user_details.findOne({email : email})
    const user_cart = new user_cart_details({userId : _id})
    user_cart.save().then(use => {
        console.log(`${use} has added cart successfully`)
    }).catch(err => {console.log(`unable to register`, err)})
    res.status(200).json(user)
    }
    );
}

module.exports = {signUp}