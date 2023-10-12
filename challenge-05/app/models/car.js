'use strict'
const { Model } = require('sequelize')

const { v4: uuidv4 } = require('uuid')
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Car.init(
    {
      name: DataTypes.STRING,
      type: {
        type: DataTypes.ENUM('small', 'medium', 'large'),
        defaultValue: 'small',
      },
      image: DataTypes.STRING,
      capacity: DataTypes.INTEGER,
      rentPerDay: DataTypes.INTEGER,
      description: DataTypes.STRING,
      availableAt: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Car',
    }
  )
  Car.beforeCreate((x) => (x.id = uuidv4()))
  return Car
}