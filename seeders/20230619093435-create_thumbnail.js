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
   await queryInterface.bulkInsert('thumbnails',[
    {
      thumbnailName: "T-Shirt TELLA TEAL BLUE",
      thumbnailPreview: "https://www.screamous.com/cdn/shop/products/id-11134207-7qul5-lfmklqyyxnqi4f_590x.jpg?v=1681708520",
      thumbnailUrl1: "https://www.screamous.com/cdn/shop/products/id-11134207-7qul7-lfmklqyytg165a_590x.jpg?v=1681708511",
      thumbnailUrl2: "https://www.screamous.com/cdn/shop/products/id-11134207-7qul3-lfmklqyyw96288_grande.jpg?v=1681708516",
      thumbnailUrl3: "https://www.screamous.com/cdn/shop/products/id-11134207-7qukz-lfmklqyyuulm92_590x.jpg?v=1681708514"
    },
    {
      thumbnailName: "T-Shirt OVERSIZED LEGEND TINY DARK FOREST",
      thumbnailPreview: "https://www.screamous.com/cdn/shop/files/id-11134207-7qul9-lgj2cflcwewvb8_360x.jpg?v=1683531724",
      thumbnailUrl1: "https://www.screamous.com/cdn/shop/files/id-11134207-7quky-lgj2cflcqsn38b_360x.jpg?v=1683531716",
      thumbnailUrl2: "https://www.screamous.com/cdn/shop/files/id-11134207-7qul8-lgj2cflcv0cf1d_360x.jpg?v=1683531722",
      thumbnailUrl3: "https://www.screamous.com/cdn/shop/files/id-11134207-7qul9-lgj2cflctlrz4b_360x.jpg?v=1683531719"
    },
    {
      thumbnailName: "Polo Shirt CROWN BLACK MISTY",
      thumbnailPreview: "https://www.screamous.com/cdn/shop/products/id-11134207-7qul4-lfrs48szn9bx9a_a97b430c-58a5-4c70-828c-509f8de0cd74_360x.jpg?v=1681901427",
      thumbnailUrl1: "https://www.screamous.com/cdn/shop/products/id-11134207-7qul0-lfrs48szj1mle6_150x.jpg?v=1681901413",
      thumbnailUrl2: "https://www.screamous.com/cdn/shop/products/id-11134207-7qukw-lfrs48szlurha3_360x.jpg?v=1681901418",
      thumbnailUrl3: "https://www.screamous.com/cdn/shop/products/id-11134207-7qul8-lfrs48szuabybd_150x.jpg?v=1681901416"
    },
    {
      thumbnailName: "Flannel ANGELOS NAVY RED",
      thumbnailPreview: "",
      thumbnailUrl1: "",
      thumbnailUrl2: "",
      thumbnailUrl3: ""
    },
    {
      thumbnailName: "",
      thumbnailPreview: "",
      thumbnailUrl1: "",
      thumbnailUrl2: "",
      thumbnailUrl3: ""
    },
    // {
    //   thumbnailName: "",
    //   thumbnailPreview: "",
    //   thumbnailUrl1: "",
    //   thumbnailUrl2: "",
    //   thumbnailUrl3: ""
    // },
   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('thumbnails',null,{});
  }
};
