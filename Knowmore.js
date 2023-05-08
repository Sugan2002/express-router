const express = require ('express')
const router = express.Router()

router.get('/', (request,response) => {
    response.send("Know More Page")
})

module.exports = router