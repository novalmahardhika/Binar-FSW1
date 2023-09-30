import { DataTypes } from 'sequelize'
import { sequelize } from '../config/db.js'

const Car = sequelize.define('cars', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  type: {
    type: DataTypes.ENUM('small', 'medium', 'large'),
    defaultValue: 'small',
    // allowNull: false,
  },

  image: {
    type: DataTypes.STRING,
    // allowNull: false,
  },

  capacity: {
    type: DataTypes.INTEGER,
    // allowNull: false,
  },

  rentPerDay: {
    type: DataTypes.INTEGER,
    // allowNull: false,
  },

  description: {
    type: DataTypes.STRING,
    // allowNull: false,
  },

  availableAt: {
    type: DataTypes.DATE,
    // allowNull: false,
  },
})

try {
  await sequelize.sync()
  console.log('created table cars')
} catch (error) {
  console.log(`created table car is fail : ${error}`)
}

export default Car
