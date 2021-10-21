const router = require('express').Router()
const fs = require('fs')
const db = require('../db/db.json')


router.get('/hockey', (req, res) => res.json(db))

router.post('/hockey', (req, res) => {
    console.log(req.body);

    db.push(req.body)

    fs.writeFileSync('./db/db.json', JSON.stringify(db))
    res.status(200).json(req.body)
})

module.exports = router