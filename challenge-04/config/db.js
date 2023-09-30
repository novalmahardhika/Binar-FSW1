import { Sequelize } from 'sequelize'
import { config, dialect } from './db.config.js'
import { CarModel } from '../models/car.model.js'

export const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: dialect,
  }
)

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize
db.cars = CarModel(sequelize)

export default db
