import express from 'express'

const app = express()

app.use(express.static('public'))

app.get('/hello', (req, res) => {
    res.send('Hello get!')
})

app.post('/hello', (req, res) => {
    res.send('Hello post!')
})

app.listen(8080, () => {
    console.log('Server listening on port 8080')
})