module.exports = (sequelize, DataTypes) => {

    let usuario = sequelize.define(
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

    usuario.associate = (models) => {
        usuario.hasMany(models.Post, {foreignKey: 'usuarios_id', as: 'posts'});
        usuario.belongsToMany(models.Usuario, {as: "amigos", through: "amizades", timestamps: false, foreignKey: "id_usuario1", otherkey: "id_usuario2"});
    }

        return usuario;
}