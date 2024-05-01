const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'userId' });
      // define association here
    }
  }
  Favorite.init({
    userId: DataTypes.INTEGER,
    pubDate: DataTypes.DATE,
    title: DataTypes.STRING,
    link: DataTypes.STRING,
    enclosure_url: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Favorite',
  });
  return Favorite;
};
