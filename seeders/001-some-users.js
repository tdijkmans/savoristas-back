"use strict"
const bcrypt = require("bcrypt")
const { SALT_ROUNDS } = require("../config/constants")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Gordon Ramsay",
          email: "Gordon@Ramsay.com",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/6/6f/Gordon_Ramsay.jpg",
          password: bcrypt.hashSync("kook1234", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Bobby Flay",
          email: "Bobby@Flay.com",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/6/6f/Gordon_Ramsay.jpg",
          password: bcrypt.hashSync("kook1234", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Wolfgand Puck",
          email: "wolfgang@puck.com",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/6/6f/Gordon_Ramsay.jpg",
          password: bcrypt.hashSync("kook1234", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Giada De Laurentis",
          email: "Giada@DeLaurentis.com",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/6/6f/Gordon_Ramsay.jpg",
          password: bcrypt.hashSync("kook1234", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Ina Garten",
          email: "Ina@Garten.com",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/6/6f/Gordon_Ramsay.jpg",
          password: bcrypt.hashSync("kook1234", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Thomas Dijkmans",
          email: "thomas@dijkmans.com",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/6/6f/Gordon_Ramsay.jpg",
          password: bcrypt.hashSync("kook1234", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Crazy Chef Chris:-)",
          email: "carzy@chef.com",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/6/6f/Gordon_Ramsay.jpg",
          password: bcrypt.hashSync("kook1234", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "BBQ Master Jane",
          email: "eat@meat.com",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/6/6f/Gordon_Ramsay.jpg",
          password: bcrypt.hashSync("kook1234", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          name: "Salade Goeroe Gerard",
          email: "blaadje@sla.com",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/6/6f/Gordon_Ramsay.jpg",
          password: bcrypt.hashSync("kook1234", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("users", null, {})
  }
}
