/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('data_dictionary', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    data_code: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    identification: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    data_type: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    updater: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    update_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    creater: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    active: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    comment: {
      type: DataTypes.STRING(3000),
      allowNull: true
    }
  }, {
    tableName: 'data_dictionary'
  });

  Model.associate = function() {

  }

  return Model;
};
