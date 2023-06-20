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
    await queryInterface.bulkInsert('detailProducts', [
      {
       detailName: 'T-Shirt TELLA TEAL BLUE',
       discount: 57,
       thumbnail:1,
       description: "SCREAMOUS KAOS TELLA adalah kaos pria dan wanita yang dibuat dari bahan berkualitas tinggi yang nyaman dipakai sepanjang hari. Mengusung desain Imajinatif typography Screamous membuatnya pas untuk dipakai dalam kegiatan apapun.",
       review: " ",
       rating:5,
       product_quote_S: 100,
       product_quote_L: 100,
       product_quote_XL: 100,
       initialPrice:185000 ,
       category: "T-Shirt",
       link: " ",
    },
      {
       detailName: 'T-Shirt OVERSIZED LEGEND TINY DARK FOREST',
       discount: 65,
       thumbnail:2,
       description: "SCREAMOUS KAOS LEGEND TINY adalah kaos pria dan wanita yang dibuat dari bahan berkualitas tinggi yang nyaman dipakai sepanjang hari. Mengusung desain Logo Crown dan Typografi Screamous yang Timbul membuatnya pas untuk dipakai dalam kegiatan apapun.",
       review: " ",
       rating: 5,
       product_quote_S: 100,
       product_quote_L: 100,
       product_quote_XL: 100,
       initialPrice: 300000,
       category: "T-Shirt",
       link: " ",
    },
      {
       detailName: 'Polo Shirt CROWN BLACK MISTY',
       discount: 52,
       thumbnail:3,
       description: "SCREAMOUS CROWN adalah kemeja kaos berkerah lengan pendek pria dan wanita yang dibuat dari bahan berkualitas tinggi yang nyaman dipakai sepanjang hari. Mengusung desain embroidery logo crown dengan kancing deret pada bagian depan membuatnya pas untuk dipakai dalam kegiatan apapun.",
       review: "",
       rating: 5,
       product_quote_S: 100,
       product_quote_L: 100,
       product_quote_XL: 100,
       initialPrice: 250000,
       category: "Polo",
       link: " ",
    },
      {
       detailName: 'Flannel ANGELOS NAVY RED',
       discount: 55,
       thumbnail:4,
       description: "SCREAMOUS ANGELOS adalah Kemeja Lengan Panjang pria yang dibuat dari bahan berkualitas tinggi, berkerah Spread collar dengan kancing deret pada bagian depan serta woven lebel dan Nyaman untuk penggunaan sehari-hari maupun acara casual.",
       review: "",
       rating: 5,
       product_quote_S: 100,
       product_quote_L: 100,
       product_quote_XL: 100,
       initialPrice: 325000,
       category: "Shirt",
       link: " ",
    },
      {
       detailName: 'T-Shirt Longsleeves Rugby MARK BLACK WHITE',
       discount: 33,
       thumbnail:5,
       description: "SCREAMOUS KAOS LENGAN PANJANG MARK adalah Rugby Longslevee pria dan wanita yang dibuat dari bahan berkualitas tinggi yang nyaman dipakai sepanjang hari. Dengan looks Sportwear Vintage Dapat digunakan dalam cuaca panas maupun dingin, cocok untuk style sehari hari",
       review: "",
       rating: 5,
       product_quote_S: 100,
       product_quote_L: 100,
       product_quote_XL: 100,
       initialPrice: 225000,
       category: "T-Shirt",
       link: " ",
    }
    //   {
    //    detailName: '',
    //    discount: ,
    //    thumbnail: 1,
    //    description: "",
    //    review: "",
    //    rating: ,
    //    product_quote_S: ,
    //    product_quote_L: ,
    //    product_quote_XL: ,
    //    initialPrice: ,
    //    category: " ",
    //    link: " ",
    // },
     
  ], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('detailProducts',null,{});
  }
};
