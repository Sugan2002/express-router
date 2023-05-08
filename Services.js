const express = require ('express')
const router = express.Router()

const listOfServices=[
    
    {
        'id' : 1,
        'name' : 'Web Development'
    },
    {
        'id' : 2,
        'name' : 'UI/UX Designing'
    },
    {
        'id' : 3,
        'name' : 'Game Development'
    },
    {
        'id' : 4,
        'name' : 'Mobile Development'
    },
    {
        'id' : 5,
        'name' : 'React app Development'
    }
    
]
router.get('/', (request,response) => {
    response.send("Services Page")
})

router.get('/:id([0-9]{1})', (request, response) =>{
    const pageId = Number(request.params.id)
    const userId = listOfServices.find((user)=>user.id === pageId)
    if(!userId){
        response.send('page not found')
    }
    else{
        response.json(userId.name)
    }

    // response.send(`The list of users ${request.params.id}`)

})

module.exports = router