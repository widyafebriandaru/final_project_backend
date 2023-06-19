'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class menuProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  menuProduct.init({
    productName: DataTypes.STRING
  }, {
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
  return menuProduct;
};