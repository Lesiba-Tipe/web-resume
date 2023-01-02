const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 3000;

express()
  .use(express.static(path.join(__dirname, 'public')))
  //.get('/', (req, res) => res.sendFile('./pages/index.html',{root:__dirname}))
  .get('/', (req, res) => res.send('Server laoded successfully'))
  .get('/data', (req, res) => res.sendFile('./data.json', {root:__dirname}))
  .listen(PORT, () => console.log(`Listening on localhost:${ PORT }`))