import { Sequelize } from 'sequelize'
import studentCreator from './student.js'
import universityCreator from './university.js'
import courseCreator from './course.js'

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'my.db'
})

const Student = studentCreator(sequelize, Sequelize)
const University = universityCreator(sequelize, Sequelize)
const Course = courseCreator(sequelize, Sequelize)

// TODO: associations
University.hasMany(Student)
University.hasMany(Course)

Course.belongsToMany(Student, { through: 'enrollments' })
Student.belongsToMany(Course, { through: 'enrollments' })

try {
    await sequelize.sync({
        alter: true
    })
} catch (error) {
    console.warn(error)
}

export default {
    Student,
    University,
    Course
}
