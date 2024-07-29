const express = require('express')
const app = express()
const cors = require('cors')
const country = require('./router/country')


const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.use('/',country)

app.get('/', (req,res) => {
    res.send('Hello World')
})



app.listen(PORT, () => {
    console.log(`Your server is running on ${PORT}`)
})