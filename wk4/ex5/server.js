import express from 'express'

const app = express()

app.use(express.static('public'))
app.use(express.json())

const catRepository = [{
    name: 'Kitty',
    age: 2
}, {
    name: 'Tom',
    age: 4
}]

app.get('/cats', (req, res) => {
    res.status(200).json(catRepository)
})

app.post('/cats', (req, res) => {
    const newCat = req.body
    catRepository.push(newCat)
    res.status(201).json(newCat)
})

app.listen(8080, () => {
    console.log('Server listening on port 8080')
})