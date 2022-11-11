const express = require(`express`)
const router = express.Router()
const {get_item} = require(`../controllers/get-item`)

router.get(`/item`, get_item)

module.exports = router