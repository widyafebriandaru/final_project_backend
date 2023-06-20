'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('thumbnails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      thumbnailName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      thumbnailPreview: {
        type: Sequelize.STRING
      },
      thumbnailUrl1: {
        allowNull: false,
        type: Sequelize.STRING
      },
      thumbnailUrl2: {
        allowNull: false,
        type: Sequelize.STRING
      },
      thumbnailUrl3: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        type: Sequelize.DATE
      }
    });
  },
 
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('thumbnails');
  }
};