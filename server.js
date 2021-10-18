const express = require('express')
const path = require('path')
const app = express()
const PORT = 3001

app.use(express.static('public'))

app.get('/', (res, req) => res.send('/index.html'))

app.get('/secondary', (req, res) => res.sendFile(path.join(__dirname, './public/second.html')))

app.get('/test', (req, res) => res.sendFile(path.join(__dirname, './testing/index.html')))

app.listen(PORT, () => console.log(`chillin at http://localhost:${PORT}`))