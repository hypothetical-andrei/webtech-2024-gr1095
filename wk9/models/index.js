import { Sequelize } from 'sequelize'
import studentCreator from './student.js'
import universityCreator from './university.js'

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'my.db'
})

const Student = studentCreator(sequelize, Sequelize)
const University = universityCreator(sequelize, Sequelize)

// TODO: associations
University.hasMany(Student)

try {
    await sequelize.sync({
        force: true
    })
} catch (error) {
    console.warn(error)
}

export default {
    Student,
    University
}
