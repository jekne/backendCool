"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("stories", [
      {
        name: "Johann stories",
        content: "this is the johann content",
        imageUrl:
          "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80",
        spaceId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mom stories",
        content: "this is my mom content",
        imageUrl:
          "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        spaceId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cá stories",
        content: "this is the Cacá content",
        imageUrl:
          "https://images.pexels.com/photos/415708/pexels-photo-415708.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        spaceId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ge stories",
        content: "this is the Ge content",
        imageUrl:
          "https://images.pexels.com/photos/234510/pexels-photo-234510.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        spaceId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ge stories",
        content: "this is the Ge content",
        imageUrl:
          "https://images.pexels.com/photos/234510/pexels-photo-234510.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        spaceId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ge stories",
        content: "this is the Ge content",
        imageUrl:
          "https://images.pexels.com/photos/234510/pexels-photo-234510.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        spaceId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ge stories",
        content: "this is the Ge content",
        imageUrl:
          "https://images.pexels.com/photos/234510/pexels-photo-234510.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        spaceId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cá stories",
        content: "this is the Cacá content",
        imageUrl:
          "https://images.pexels.com/photos/415708/pexels-photo-415708.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        spaceId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cá stories",
        content: "this is the Cacá content",
        imageUrl:
          "https://images.pexels.com/photos/415708/pexels-photo-415708.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        spaceId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cá stories",
        content: "this is the Cacá content",
        imageUrl:
          "https://images.pexels.com/photos/415708/pexels-photo-415708.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        spaceId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cá stories",
        content: "this is the Cacá content",
        imageUrl:
          "https://images.pexels.com/photos/415708/pexels-photo-415708.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        spaceId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("stories", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
