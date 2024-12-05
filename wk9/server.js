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

app.get('/universities/:uid/courses', async (req, res, next) => {
    try {
        const university = await models.University.findByPk(req.params.uid, {
            include: models.Course
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

app.post('/universities/:uid/courses', async (req, res, next) => {
    try {
        const university = await models.University.findByPk(req.params.uid)
        if (university) {
            const course = new models.Course(req.body)
            course.universityId = university.id
            await course.save()
            res.status(201).json(course)
        } else {
            res.status(404).json({ message: 'not found' })
        }
    } catch (err) {
        next(err)
    }
})

app.get('/students/:sid/courses', async (req, res, next) => {
    try {
        const student = await models.Student.findByPk(req.params.sid)
        if (student) {
            const courses = await student.getCourses()
            res.status(200).json(courses)
        } else {
            res.status(404).json({ message: 'not found' })
        }
    } catch (err) {
        next(err)
    }
})

app.post('/students/:sid/courses', async (req, res, next) => {
    try {
        const student = await models.Student.findByPk(req.params.sid)
        const course = await models.Course.findByPk(req.body.cid)
        if (student && course) {
            await student.addCouse(course)
            res.status(201).json({ message: 'student enrolled to course' })
        } else {
            res.status(404).json({ message: 'not found' })
        }
    } catch (err) {
        next(err)
    }
})

app.get('/courses/:cid/students', async (req, res, next) => {
    try {
        const course = await models.Course.findByPk(req.params.cid)
        if (course) {
            const students = await course.getStudents()
            res.status(200).json(students)
        } else {
            res.status(404).json({ message: 'not found' })
        }
    } catch (err) {
        next(err)
    }
})

app.post('/courses/:cid/students', async (req, res, next) => {
    try {
        const student = await models.Student.findByPk(req.body.sid)
        const course = await models.Course.findByPk(req.params.cid)
        if (student && course) {
            await course.addStudent(student)
            res.status(201).json({ message: 'student enrolled to course' })
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