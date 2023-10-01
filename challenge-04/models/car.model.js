import { DataTypes, Sequelize } from 'sequelize'

export const CarModel = (sequelize, Sequelize) => {
  const Car = sequelize.define('cars', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
      // allowNull: false,
      validate: {
        notEmpty: true,
      },
    },

    type: {
      type: DataTypes.ENUM('small', 'medium', 'large'),
      defaultValue: 'small',
      validate: {
        isIn: [['small', 'medium', 'large']],
      },
    },

    image: {
      type: DataTypes.STRING,
      // allowNull: false,
    },

    capacity: {
      type: DataTypes.INTEGER,
      // allowNull: false,
      validate: {
        isNumeric: true,
      },
    },

    rentPerDay: {
      type: DataTypes.INTEGER,
      // allowNull: false,
      validate: {
        isNumeric: true,
      },
    },

    description: {
      type: DataTypes.STRING,
      // allowNull: false,
      validate: {
        notEmpty: true,
      },
    },

    availableAt: {
      type: DataTypes.DATE,
      // allowNull: false,
      validate: {
        isDate: true,
      },
    },
  })

  return Car
}
