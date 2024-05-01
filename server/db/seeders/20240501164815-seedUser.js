/** @type {import('sequelize-cli').Migration} */

const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Ilya',
        email: 'test@test',
        password: bcrypt.hashSync('password123', 10), // Хешируем пароль
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '1',
        email: '1@1',
        password: 123, // Хешируем пароль
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Другие пользователи, которых нужно добавить
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
