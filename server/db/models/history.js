const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class History extends Model {
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
  History.init({
    userId: DataTypes.INTEGER,
    link: DataTypes.STRING,
    storage: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'History',
  });
  return History;
};
