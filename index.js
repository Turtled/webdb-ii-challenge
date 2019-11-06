const express = require('express')
var bodyParser = require('body-parser')
const db = require('./data/dbConfig');

const app = express()
const port = 3000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/api/cars', (req, res) => {
  db("cars").then((cars) => {
      res.send(200, cars);
  })
})

app.post('/api/cars', (req, res) => {
    if (req.body) {
            db('cars').insert(req.body)
                .then(car => {
                    res.status(200).json(car);
                })
                .catch(err => res.status(500).json({ error: err, message: "Could not insert body data, make sure you send correct data. Example data: { VIN: 8708347208347, Make: \"Toyota\", Model: \"4Runner\", Mileage: 158095, TransmissionType: \"Manual\", Title: \"Clean\" }" }))
    } else {
        console.log("req.body is undefined: ", req.body);
        res.status(500).json({ message: "You didn't send any data" })
    }
  })

app.listen(port, () => console.log(`listening on port ${port}`))