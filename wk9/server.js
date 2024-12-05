import express from 'express'
import models from './models/index.js'

const app = express()
app.use(express.json())

/**
 * GET all the universities from the database.
 */
app.get('/universities', async (req, res, next) => {
    try {
      const universities = await models.University.findAll()
      res.status(200).json(universities)
    } catch (err) {
      next(err)
    }
  })
  
/**
 * POST a new university to the database.
 */
app.post('/university', async (req, res, next) => {
    try {
        await models.University.create(req.body)
        res.status(201).json({ message: 'University Created!' })
    } catch (err) {
        next(err)
    }
})

app.use((err, req, res, next) => {
    console.warn(err)
    res.status(500).json({ message: 'some server error' })
})

app.listen(8080)