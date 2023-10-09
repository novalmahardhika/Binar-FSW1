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
          firstName: 'Basel',
          lastName: 'Playboy',
          email: 'basel@super.com',
          role: 'superUser',
          password: bcrypt.hashSync('basel123', 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          firstName: 'Mamat',
          lastName: 'Kremlin',
          email: 'mamat@super.com',
          role: 'superUser',
          password: bcrypt.hashSync('mamat123', 10),
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
