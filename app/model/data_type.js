/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('data_type', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    comment: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'data_type'
  });

  Model.associate = function() {

  }

  return Model;
};
