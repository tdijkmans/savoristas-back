"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: (queryInterface, Sequelize) => {
    const saltRounds = 10;
    return queryInterface.bulkInsert(
      "users",
      [
        {
          name: "hobbykok",
          email: "hobby@kok.com",
          password: bcrypt.hashSync("kook1234", saltRounds),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "meesterbakker",
          email: "meester@bakker.com",
          password: bcrypt.hashSync("bakbak1234", saltRounds),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
