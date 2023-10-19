'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },

      username: {
        type: Sequelize.STRING,
      },

      email: {
        type: Sequelize.STRING,
        unique: true,
        isEmail: true,
      },

      password: {
        type: Sequelize.STRING,
      },
      phone: {
        type: Sequelize.STRING,
      },

      role: {
        type: Sequelize.ENUM('MEMBER', 'SUPERADMIN', 'ADMIN'),
        defaultValue: 'MEMBER',
      },

      address: {
        type: Sequelize.STRING,
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },

      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users')
  },
}