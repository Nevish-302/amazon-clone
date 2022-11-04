const mongoose = require('mongoose')
const { sendRefreshToken } = require('../auth/tokens')
const {Schema} = mongoose

const personal = new Schema(
    {
        name : {
            type : String,
            required : true,
            minlength : 3,
            trim: true,
        },
        mobileNumber : {
            required : true,   
            type : Number,
            length : 10,
        },
        email : {
            type : String
        },
        passHash : {
            type : String,
            required : true,
        },
        RefreshToken : {
            type : String
        }
    }
)


const user_details = mongoose.model('user_details', personal)

module.exports = user_details