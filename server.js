const express = require('express')

//FRONT
const webMapa = express()

const base = '/home/front-web-mappa/build';

webMapa.use(express.static(`${base}`))

webMapa.get('*', (req,res) => res.sendFile('index.html' , { root : base }))

const port = 8000

webMapa.listen(port, () => console.log('Mapa Web disponibilizado com sucesso.'))