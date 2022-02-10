module.exports = (sequelize, DataTypes) => {

    return sequelize.define(
        'Usuario',
        {
            id:{
                type: DataTypes.INTEGER,
                primaryKey:true,
                autoIncrement: true,
                allowNull: false
            },
            nome:{
                type: DataTypes.STRING(100),
                allowNull: false
            },
            email: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            senha: {
                type: DataTypes.STRING(256),
                allowNull: false
            }
        },
        {
            tableName:"usuarios",
            timestamps: false
        }
    )

}