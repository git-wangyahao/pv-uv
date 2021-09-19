/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('authority', {
    authority_code: {
      type: DataTypes.STRING(200),
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    chinese_name: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    system_id: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    parent_code: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    url: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    english_name: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    icon: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    sort: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    type: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    create_account: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    update_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    update_account: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    component_name: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    component_path: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    is_show_menu: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'authority'
  });

  Model.associate = function() {

  }

  return Model;
};
