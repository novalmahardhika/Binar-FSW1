'use strict'
const { randomUUID: UUIDV4 } = require('crypto')

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
          id: UUIDV4(),
          name: 'Ferrari',
          type: 'medium',
          image: 'https://unsplash.com/photos/X16zXcbxU4U',
          capacity: 2,
          rentPerDay: 900000,
          description: 'Exotic car from italian',
          availableAt: new Date('2023-11-20'),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: UUIDV4(),
          name: 'Lamborghini',
          type: 'medium',
          image: 'https://unsplash.com/photos/X16zXcbxU4U',
          capacity: 2,
          rentPerDay: 8500000,
          description: 'Exotic car from italian',
          availableAt: new Date('2023-11-10'),
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
