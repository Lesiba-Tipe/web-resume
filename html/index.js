const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 3000;

express()
  .use(express.static(path.join(__dirname, 'public')))
  .get('/', (req, res) => res.sendFile('./index.html',{root:__dirname}))
  .get('/data', (req, res) => res.sendFile('./public/data.json', ))
  .listen(PORT, () => console.log(`Listening on localhost:${ PORT }`))