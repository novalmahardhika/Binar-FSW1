'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('Cars', 'createdBy', {
      type: Sequelize.STRING,
    })
    await queryInterface.addColumn('Cars', 'updatedBy', {
      type: Sequelize.STRING,
    })
    await queryInterface.addColumn('Cars', 'deletedBy', {
      type: Sequelize.STRING,
    })
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.removeColumn('Cars', 'createdBy')
    await queryInterface.removeColumn('Cars', 'updatedBy')
    await queryInterface.removeColumn('Cars', 'deletedBy')
  },
}
