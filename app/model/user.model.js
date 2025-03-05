import { Model, DataTypes } from 'sequelize';
import { DataBaseConfig } from '../config/database.config.js';

export class UserModel extends Model {}

UserModel.init({
    user_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING(255),
      allowNull: false,
    },
    email: {
        type: DataTypes.STRING(255),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
}, {
    sequelize: DataBaseConfig,
    modelName: 'user',  
    timestamps: false,
    tableName: 'user_2', // Permite cambiar el nombre de la tabla en la base de datos
});