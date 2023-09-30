import { sequelize } from './config/db.js'

// migrate database
try {
  await sequelize.sync({ force: true })
  console.log('Drop and re-sync table')
} catch (error) {
  console.log(`created table car is fail : ${error}`)
}
