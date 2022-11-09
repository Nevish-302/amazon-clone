const express = require(`express`)
const router = express.Router()
const {getItems, addItems, removeItems} = require(`../controllers/cart`)

router.post(`/get`, getItems)

router.post(`/add`, addItems)

router.post(`/cancel`, removeItems)

module.exports = router