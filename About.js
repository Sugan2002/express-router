const express = require ('express')
const router = express.Router()

router.get('/', (request,response) => {
    response.send("About Us Page")
})

module.exports = router