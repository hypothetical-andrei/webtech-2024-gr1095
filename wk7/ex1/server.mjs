import express from 'express'
import apiRouter from './api-router.mjs'

const app = express()
app.use(express.json())


app.locals.books = [{
    id: 1,
    title: 'a',
    content: 'a'
}, {
    id: 2,
    title: 'b',
    content: 'b'
}, {
    id: 3,
    title: 'c',
    content: 'c'
}]
app.locals.currentId = 4

app.get('/ping', (req, res, next) => {
    console.log('first endpoint was matched')
    next()
})

app.get('/ping', (req, res, next) => {
    res.status(200).json({ message: 'pong' })
})

app.use('/api', apiRouter)

app.listen(8080)