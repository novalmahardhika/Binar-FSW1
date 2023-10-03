'use strict'

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
          id: '1b0e4be7-2288-436f-a555-cd02c11ad944',
          name: 'Ferrari',
          type: 'medium',
          image: '../../../image.png',
          capacity: 2,
          rentPerDay: 900000,
          description: 'Exotic car from italian',
          availableAt: new Date('2023-11-20'),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '7657f068-c323-4eca-914d-e0ba08bb369f',
          name: 'Lamborghini',
          type: 'medium',
          image: '../../../image.png',
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
