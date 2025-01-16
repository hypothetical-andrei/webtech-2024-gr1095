export default (sequelize, DataTypes) => {
    return sequelize.define('university', {
        universityName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [3, 20]
            }
        }    
    })
}