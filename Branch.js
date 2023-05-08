const express = require ('express')
const router = express.Router()

router.get('/', (request,response) => {
    response.send("Branch Page")
})

module.exports = router