const express = require(`express`)
const router = express.Router()
const {get_orders, add_orders, cancel_orders} = require(`../controllers/orders`)

router.post(`\get`, get_orders)

router.post(`\add`, add_orders)

router.post(`\cancel`, cancel_orders)

module.exports = router