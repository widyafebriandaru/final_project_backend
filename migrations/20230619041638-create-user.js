'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullName: {
        allowNull: false,
        length: 50,
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        length: 50,
        type: Sequelize.STRING
      },
      phone: {
        allowNull: false,
        length: 30,
        type: Sequelize.STRING
      },
      password: {
        allowNull: false,
        length: 100,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};