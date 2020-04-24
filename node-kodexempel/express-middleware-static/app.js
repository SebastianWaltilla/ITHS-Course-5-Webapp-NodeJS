const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

// Använder static files
app.use(express.static('public'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/user/:id', function (req, res, next) {
    res.send('USER ' + req.params.id)
})

app.post('/user', function (req, res, next) {
    res.send(req.body)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))