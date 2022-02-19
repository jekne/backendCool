"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("spaces", [
      {
        title: "Johann Space",
        description: "this is the johanns space",
        backgroundColor: "#33FF4C",
        color: "#100999",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Mom Space",
        description: "this is my mom space",
        backgroundColor: "#33FF4C",
        color: "#100999",
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Ge Space",
        description: "this is my mom space",
        backgroundColor: "#33FF4C",
        color: "#100999",
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Cá Space",
        description: "this is my mom space",
        backgroundColor: "#33FF4C",
        color: "#100999",
        userId: 4,
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
    await queryInterface.bulkDelete("spaces", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
