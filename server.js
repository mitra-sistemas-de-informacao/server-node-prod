const express = require('express')


//FRONT CARTA DE SERVICO
const cartaServico = express()

const urlCartaServico = 'D:/web/safe/daae/front-sou-cidadao-carta-servico/build';

cartaServico.use(express.static(`${urlCartaServico}`))

cartaServico.get('*', (req,res) => res.sendFile('index.html' , { root : urlCartaServico }))

const port = 8000

cartaServico.listen(port, () => console.log('Carta de servico disponibilizado com sucesso.'))


//FRONT SOU CIDADAO ORGANIZACAO
const organizacao = express()

const urlOrganizacao = 'D:/web/safe/daae/front-sou-cidadao-organizacao/build';

organizacao.use(express.static(`${urlOrganizacao}`))

organizacao.get('*', (req,res) => res.sendFile('index.html' , { root : base }))

const port = 8001

organizacao.listen(port, () => console.log('Sou cidadao organizacao disponibilizado com sucesso.'))