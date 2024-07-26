const express = require('express')
const app = express()
const cors = require('cors')
const { lookup } = require('geoip-lite')

const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.urlencoded({extended : true}))
app.use(express.json())

app.get('/', (req,res) => {
    res.send('Hello World')
})

app.get('/country', (req,res) => {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
    console.log(ip)
    res.send(JSON.stringify(lookup(ip)))
})

app.listen(PORT, () => {
    console.log(`Your server is running on ${PORT}`)
})