/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Histories', [
      {
        userId: 1, // ID пользователя из таблицы Users
        link: 'https://lenta.ru/news/2024/05/01/v-polshe-proshel-antivoennyy-marsh/',
        storage: 'В Польше прошел антивоенный марш',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2, // ID пользователя из таблицы Users
        link: 'https://lenta.ru/news/2024/05/01/v-polshe-proshel-antivoennyy-marsh/',
        storage: 'В Польше прошел антивоенный марш',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Другие записи истории, которые нужно добавить
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Histories', null, {});
  },
};
