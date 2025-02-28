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
        type: DataTypes.STRING(200),
        allowNull: false,
    },
    description: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
   //  email: {
   //      type: DataTypes.STRING(150),
   //      allowNull: false,
   //  },
   //  password: {
   //      type: DataTypes.STRING(250),
   //      allowNull: false,
   //  },
   //  created_at: {
   //      type: DataTypes.STRING(20),
   //      allowNull: true,
   //  }
}, {
    sequelize: DataBaseConfig,
    modelName: 'user',
    timestamps: false,
    tableName: 'user',
});