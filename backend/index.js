const express = require('express')
const app = express()
const cors = require('cors')
const { lookup } = require('geoip-country')

const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.urlencoded({extended : true}))
app.use(express.json())

app.get('/', (req,res) => {
    res.send('Hello World')
})

app.get('/country', (req,res) => {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
    const this_ip = ip.split(',')[0]
    console.log(this_ip)
    res.send('Adress ip : ' + this_ip + '<br>the lookup :  ' + (JSON.stringify(lookup(this_ip)?JSON.stringify(lookup(this_ip)): "None country or Localhost")))
})

app.listen(PORT, () => {
    console.log(`Your server is running on ${PORT}`)
})