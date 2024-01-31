//Express.js palvelin//
const path = require('path')
const express = require('express')

const app = express()

//JSON Tiedoston importtaus
const herkut = require('./herkut.json')

//GET ALL etsitään kaikki namit jsonisya, controlleri metodi
app.get('/api/herkut', (req, res) => {
    res.json(herkut)
    })

//Tehdään polkumääritys public kansioon 
const polku = path.join(__dirname, './public')

//Sanotaan että em. polussa on tiedostonsisältöä jota palvelin käyttää kun se saa http request
app.use(express.static(polku))

app.listen(3001, () => {
    console.log('Server is up on port 3001.')
}) 