const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended : true}))
app.use(cookieParser())
app.use(cors())

const uri = `mongodb://127.0.0.1:27017/test`;
mongoose.connect(uri, {useNewUrlParser : true})
const connection = mongoose.connection
connection.once('open', ()=>
{
    console.log('MongoDB has connected successfully')
})

//routes

const auth = require('./routes/auth')
const cart = require(`./routes/cart`)
const orders = require(`./routes/orders`)
const wishList = require('./routes/wishList')
const search = require(`./routes/search`)

//routing

app.use('/auth', auth)
app.use(`/user/cart`, cart)
app.use(`/user/orders`, orders)
app.use(`/user/wishlist`, wishList)
app.use(`/search`, search)

app.listen(5000, ()=>
{
    console.log("The server is listening on the port 5000")
})