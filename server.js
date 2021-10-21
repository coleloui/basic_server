const express = require('express')
const path = require('path')
const app = express()
const PORT = 3001
const apiRoutes = require('./routes')

app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.get('/', (res, req) => res.send('/index.html'))
app.use('/api', apiRoutes)


app.listen(PORT, () => console.log(`chillin at http://localhost:${PORT}`))