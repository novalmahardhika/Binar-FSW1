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
      Car.belongsTo(models.User, {
        foreignKey: 'createdBy',
        as: 'createdCarBy',
      })
      Car.belongsTo(models.User, {
        foreignKey: 'updatedBy',
        as: 'updatedCarBy',
      })
      Car.belongsTo(models.User, {
        foreignKey: 'deletedBy',
        as: 'deletedCarBy',
      })
    }
  }
  Car.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'name cannot null',
          },
          notEmpty: true,
        },
      },

      type: {
        type: DataTypes.ENUM('small', 'medium', 'large'),
        defaultValue: 'small',
        validate: {
          isIn: {
            args: [['small', 'medium', 'large']],
            msg: 'type not valid, type should be small, medium, or large',
          },
        },
      },

      image: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'image cannot null',
          },
        },
      },

      capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'capacity cannot null',
          },
        },
      },

      rentPerDay: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'rentPerDay cannot null',
          },
        },
      },

      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'description cannot null',
          },
        },
      },

      availableAt: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'availableAt cannot null',
          },
        },
      },

      createdBy: DataTypes.STRING,
      updatedBy: DataTypes.STRING,
      deletedBy: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Car',
      paranoid: true,
    }
  )
  Car.beforeCreate((x) => (x.id = uuidv4()))
  return Car
}
