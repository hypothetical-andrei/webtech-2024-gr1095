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
app.post('/universities', async (req, res, next) => {
    try {
        await models.University.create(req.body)
        res.status(201).json({ message: 'University Created!' })
    } catch (err) {
        next(err)
    }
})

app.get('/universities/:uid/students', async (req, res, next) => {
    try {
        const university = await models.University.findByPk(req.params.uid, {
            include: models.Student
        })
        if (university) {
            res.status(200).json(university)
        } else {
            res.status(404).json({ message: 'not found' })
        }
    } catch (err) {
        next(err)
    }
})

app.post('/universities/:uid/students', async (req, res, next) => {
    try {
        const university = await models.University.findByPk(req.params.uid)
        if (university) {
            const student = new models.Student(req.body)
            student.universityId = university.id
            await student.save()
            res.status(201).json(student)
        } else {
            res.status(404).json({ message: 'not found' })
        }
    } catch (err) {
        next(err)
    }
})

app.use((err, req, res, next) => {
    console.warn(err)
    res.status(500).json({ message: 'some server error' })
})

app.listen(8080)