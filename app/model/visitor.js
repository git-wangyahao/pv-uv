/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('visitor', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    system_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    uuid: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    created_time: {
      type: DataTypes.TIME,
      allowNull: true,
    }
  }, {
    tableName: 'visitor'
  });

  Model.associate = function() {

  }

  return Model;
};
