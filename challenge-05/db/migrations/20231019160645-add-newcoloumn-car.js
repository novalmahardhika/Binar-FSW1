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
      type: Sequelize.UUID,
      allowNull: false,
      defaultValue: 'af44c06a-b249-4328-a600-bb2bca11c06d',
      references: {
        model: 'Users',
        key: 'id',
      },
    })
    await queryInterface.addColumn('Cars', 'updatedBy', {
      type: Sequelize.UUID,
      references: {
        model: 'Users',
        key: 'id',
      },
    })
    await queryInterface.addColumn('Cars', 'deletedBy', {
      type: Sequelize.UUID,
      references: {
        model: 'Users',
        key: 'id',
      },
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
