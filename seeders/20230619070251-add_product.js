'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('menuProducts', [
      {
       productName: 'Daru',
       thumbnailPreview: "febriandaru23@gmail.com",
       discount: "081532551051",
       initialPrice: "727272",
       finalPrice:"",
       rating:""
    }
     
  ], {});
    await queryInterface.addConstraint('menuProducts', [
      {
        fields: ['productName'],
        type: 'foreign key',
        name:'FK_menuProducts_thumbnail',
        references: {
          table: 'thumbnail',
          field: 'id'
        }
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
