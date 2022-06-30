/* IMPORTS */

const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
const path = require('path')
const { uuid } = require('uuidv4')
require('dotenv').config()

/* SETS VIEW ENGINE */

app.set('view engine', 'ejs')
app.set("views", path.join(__dirname, "views"))

/* SETS MIDDLEWARE */

app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

/* DB CONNECTION */

let db
const dbConnectionStr = process.env.DB_STRING
const dbName = 'phlowusers'

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
.then(client => {
    console.log(`Connected to ${dbName} database`)
    db = client.db(dbName)
})

/* FUNCTIONS */

const setReadableDate = date => {
    return date.toISOString().split('T')[0]
}

/* ROUTES */

// ROOT ROUTE
app.get('/', (req,res) => {
    db.collection('projects').find().toArray()//.find()//.sort({likes: -1}).toArray()
    .then(data => {
        res.render('index', { projects: data })
    })
    .catch(error => console.error(error))
})

// NEW USER ROUTE
app.post('/addUser', (req,res) => {
    // logic here
})

// CREATE NEW PHLOW ROUTE
app.get('/addPhlow', (req,res) => {
    res.render('addPhlow')
})

// ADD NEW PROJECT ROUTE
app.post('/addProject', (req,res) => {
    const obj = {
                    '_id':              uuid(),
                    'clientOne':        req.body.clientOne,
                    'clientOneMail':    req.body.clientOneMail,
                    'clientTwo':        req.body.clientTwo,
                    'clientTwoMail':    req.body.clientTwoMail,
                    'eventDate':        req.body.eventDate,
                    'eventLocation':    req.body.eventLocation,
                    'dateAdded': setReadableDate(new Date())
    }
    db.collection('projects').insertOne(obj)
        .then(result => {
            console.log('Project Added')
            res.redirect('/')
        })
        .catch(error => console.error(error))
})

// UPDATE PROJECT ROUTE
app.put('/updateProject', (req,res) => {
    // update using _id property
})

/* SERVER LISTENING */

app.listen(process.env.PORT, ()=>{
    console.log(`Server running on port ${process.env.PORT}...`)
})
