export default (sequelize, DataTypes) => {
    return sequelize.define('course', {
        description: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}