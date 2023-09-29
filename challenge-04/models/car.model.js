import { Sequelize, DataTypes } from 'sequelize'
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

sequelize
  .sync()
  .then(() => {
    console.log('Car table created successfully!')
  })
  .catch((error) => {
    console.error('Unable to create table : ', error)
  })
