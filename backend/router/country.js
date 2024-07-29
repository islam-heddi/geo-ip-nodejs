const express = require('express')
const router = express.Router()
const { lookup } = require('geoip-country')

router.get('/country', (req,res) => {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
    const this_ip = ip.split(',')[0]
    console.log(this_ip)
    res.send('Adress ip : ' + this_ip + '<br>the lookup :  ' + (JSON.stringify(lookup(this_ip)?JSON.stringify(lookup(this_ip)): "None country or Localhost")))
})

module.exports = router