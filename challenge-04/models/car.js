'use strict'
const { Model } = require('sequelize')
const { randomUUID: UUIDV4 } = require('crypto')

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
      type: DataTypes.ENUM('small', 'medium', 'large'),
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
  Car.beforeCreate((x) => (x.id = UUIDV4()))
  return Car
}
