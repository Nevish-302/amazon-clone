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

const register = require('./routes/register')
const login = require('./routes/login')


//routing

ap.use('/login', login)
app.use('/register', register)


app.listen(5000, ()=>
{
    console.log("The server is listening on the port 5000")
})