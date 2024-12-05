import express from 'express'
import { Sequelize } from 'sequelize'

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'my.db'
})

const Employee = sequelize.define('employee', {
    firstName: Sequelize.STRING,
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [3, 20]
        }
    },
    salary: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        validate: {
            min: 0
        }
    }
}, {
    tableName: 'company_employees'
})

const app = express()
app.use(express.json())

try {
    await sequelize.sync({ alter: true })
} catch (error) {
    console.warn(error)
}

app.get('/employees', async (req, res, next) => {
    try {
        const results = await Employee.findAll({})
        res.status(200).json(results)
    } catch (error) {
        next(error)
    }
})

app.post('/employees', async (req, res, next) => {
    try {
        const result = await Employee.create(req.body)
        res.status(201).json(result)
    } catch (error) {
        next(error)
    }
})

app.get('/employees/:eid', async (req, res, next) => {
    try {
        const result = await Employee.findByPk(req.params.eid)
        if (result) {
            res.status(200).json(result)
        } else {
            res.status(404).json({ message: 'not found' })
        }
    } catch (error) {
        next(error)
    }
})

app.put('/employees/:eid', async (req, res, next) => {
    try {
        // const result = await Employee.findByPk(req.params.eid)
        // if (result) {
        //     await result.update(req.body, { fields: ['firstName', 'lastName', 'salary'] })
        //     res.status(202).json({ message: 'updated'})
        // } else {
        //     res.status(404).json({ message: 'not found' })
        // }
        const result = await Employee.update({
            ...req.body
        }, { 
            where: {
            id: req.params.eid
            }
        }, { fields: ['firstName', 'lastName', 'salary'] })
        if (result.shift() === 1) {
            res.status(202).json({ message: 'updated'})
        } else {
            res.status(404).json({ message: 'not found' })
        }
    } catch (error) {
        next(error)
    }
})

app.delete('/employees/:eid', async (req, res, next) => {
    try {
        const result = await Employee.findByPk(req.params.eid)
        if (result) {
            await result.destroy()
            res.status(204).json({})
        } else {
            res.status(404).json({ message: 'not found' })
        }
    } catch (error) {
        next(error)
    }
})

app.use((err, req, res, next) => {
    console.warn(err)
    res.status(500).json({ message: 'some error' })
})

app.listen(8080)