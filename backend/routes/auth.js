const express = require(`express`)
const router = express.Router()
const {signup} = require('../controllers/signup')
const {sigin} = require(`../controllers/signin`)

router.post('/signup', signup)

router.post(`/signin`, sigin)

module.exports = {router}