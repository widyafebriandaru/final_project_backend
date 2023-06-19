'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('menuProducts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      productName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      thumbnailPreview: {
        allowNull: false,
        type: Sequelize.STRING
      },
      discount: {
        allowNull: false,
        type: Sequelize.STRING
      },
      initialPrice: {
        allowNull: false,
        type: Sequelize.STRING
      },
      finalPrice: {
        allowNull: false,
        type: Sequelize.STRING
      },
      rating: {
        allowNull: false,
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
    await queryInterface.dropTable('menuProducts');
  }
};