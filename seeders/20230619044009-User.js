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

    await queryInterface.bulkInsert('Users', [
      {
       fullName: 'Daru',
       email: "febriandaru23@gmail.com",
       phone: "081532551051",
       password: "727272",
    },
      {
       fullName: 'Nana',
       email: "nhazulishutin@gmail.com",
       phone: "081540032228",
       password: "727272",
    },
      {
       fullName: 'Widi',
       email: "darulicek@gmail.com",
       phone: "081234567891",
       password: "727272",
    }
  ], {});
  },


   
    


  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users',null,{});
  }
};
