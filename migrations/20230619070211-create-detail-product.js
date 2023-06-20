'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('detailProducts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      detailName: {
        allowNull: false,
        type: Sequelize.STRING 
      },
      discount: {
        type: Sequelize.INTEGER
      },
      thumbnail: {
        type: Sequelize.INTEGER,
        references: {
          model: 'thumbnails',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'

      },
      description: {
        type: Sequelize.STRING
      },
      review: {
        type: Sequelize.STRING
      },
      rating: {
        type: Sequelize.INTEGER
      },
      product_quote: {
        type: Sequelize.INTEGER
      },
      initial_price: {
        type: Sequelize.INTEGER
      },
      category: {
        type: Sequelize.STRING
      },
      link:{
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
    await queryInterface.dropTable('detailProducts');
  }
};