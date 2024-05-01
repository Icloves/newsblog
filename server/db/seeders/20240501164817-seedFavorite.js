/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Favorites', [
      {
        userId: 1, // ID пользователя из таблицы Users
        pubDate: new Date(),
        title: 'В Москве ликвидировали открытое горение в административном здании ',
        link: 'https://ria.ru/20240501/pozhar-1943340701.html',
        enclosure_url: 'https://cdnn21.img.ria.ru/images/07e6/08/11/1810202855_0:105:843:579_600x0_80_0_0_b9302d7998750da49eb37ce3ebcec720.jpg.webp',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2, // ID пользователя из таблицы Users
        pubDate: new Date(),
        title: 'В Испании прошли более семидесяти акций с призывами улучшения условий труда',
        link: 'https://ria.ru/20240501/ispaniya-1943340093.html',
        enclosure_url: 'https://cdnn21.img.ria.ru/images/07e7/0c/1c/1918646683_0:0:3071:1728_600x0_80_0_0_713c425d64daa1d79bb1a1bae6f3eca1.jpg.webp',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Другие избранные записи, которые нужно добавить
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Favorites', null, {});
  },
};
