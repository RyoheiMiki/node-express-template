"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      const test = await queryInterface.createTable(
        "test",
        {
          id: {
            type: Sequelize.INTEGER,
          },
          firstName: {
            type: Sequelize.STRING,
          },
          email: {
            type: Sequelize.STRING,
          }, // columns...
        },
        { transaction }
      );
      console.log(test);
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable("test");
  },
};
