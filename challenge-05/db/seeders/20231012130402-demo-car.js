'use strict'

const { v4: uuidv4 } = require('uuid')

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
      'Cars',
      [
        {
          id: uuidv4(),
          name: 'Lamborghini',
          type: 'large',
          image: 'https://unsplash.com/photos/ZSXK6W7z7qM',
          capacity: 4,
          rentPerDay: 7800000,
          description: 'Sport SUV car from lamborghini',
          availableAt: new Date('2023-11-10'),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          name: 'Aston Martin',
          type: 'small',
          image: 'https://unsplash.com/photos/suCv48kiXnY',
          capacity: 2,
          rentPerDay: 9000000,
          description: 'Exotic car from england',
          availableAt: new Date('2023-12-10'),
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
    await queryInterface.bulkDelete('Cars', null, {})
  },
}
