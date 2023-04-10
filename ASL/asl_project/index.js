const { response, request } = require('express')
const express = require('express')
const app = express()
const quizzesCtrl = require('./src/controllers/quizzes')
const authCtrl = require('./src/controllers/auth')
const questionsCtrl = require('./src/controllers/questions')
const answersCtrl = require('./src/controllers/answers')
const {Quiz} = require('./src/models')
const {Question} = require('./src/models')
const {Answer} = require('./src/models')
const session = require('express-session')
const bodyParser = require('body-parser')

app.use(session({
    saveUninitialized: false,
    secret: 'keyboard cat',
    cookie: {maxAge: 60000}
}))

app.use(bodyParser.urlencoded({ extended:false}))
app.set('views', __dirname + '/src/views')
app.set('view engine', 'twig')

// GET / HTTP/1.1
app.get('/', (request, response, next) => {response.render('home/home')})

app.use('/quizzes', quizzesCtrl)
app.use('/questions', questionsCtrl)
app.use('/answers', answersCtrl)
app.use('/auth', authCtrl)

app.listen(3000)