const express = require ('express')
const app = express()
const Home = require('./Home')
const About = require('./About')
const Branch = require('./Branch')
const Contact = require('./Contact')
const Knowmore = require('./Knowmore')

app.get('/', (request,response) => {
    response.send("We are having 6 routes")

})

app.use('/Home', Home)
app.use('/About', About)
app.use('/Branch', Branch)
app.use('/Contact', Contact)
app.use('/Knowmore', Knowmore)



app.listen(3500)