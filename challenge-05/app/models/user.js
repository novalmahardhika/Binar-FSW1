'use strict'
const { Model } = require('sequelize')

const { v4: uuidv4 } = require('uuid')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        unique: true,
        isEmail: true,
      },
      password: DataTypes.STRING,
      phone: DataTypes.STRING,
      role: {
        type: DataTypes.ENUM('superAdmin', 'admin', 'member'),
        defaultValue: 'member',
      },
      address: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
    }
  )
  User.beforeCreate((x) => (x.id = uuidv4()))
  return User
}
