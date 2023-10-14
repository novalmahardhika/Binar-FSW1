'use strict'

const { v4: uuidv4 } = require('uuid')
const bcrypt = require('bcrypt')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          id: uuidv4(),
          username: 'Basel',
          email: 'basel@super.com',
          password: bcrypt.hashSync('basel123', 10),
          phone: '082100102009',
          role: 'superAdmin',
          address: 'Jalan Sirsak 1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          username: 'Mamat',
          email: 'mamat@super.com',
          password: bcrypt.hashSync('mamat123', 10),
          phone: '082100102009',
          role: 'superAdmin',
          address: 'Jalan Pepaya 4',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {})
  },
}
