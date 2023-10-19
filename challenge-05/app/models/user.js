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
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {
            msg: 'please make sure ur format email is correct',
          },
          notNull: {
            msg: 'email cannot null or empty',
          },
        },
      },

      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'password cannot null or empty',
          },
        },
      },

      phone: DataTypes.STRING,

      role: {
        type: DataTypes.ENUM('SUPERADMIN', 'ADMIN', 'tes'),
        defaultValue: 'tes',
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
