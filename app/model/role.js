/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('role', {
    role_code: {
      type: DataTypes.STRING(200),
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    role_name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    system_id: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    role_type: {
      type: DataTypes.STRING(200),
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
    }
  }, {
    tableName: 'role'
  });

  Model.associate = function() {

  }

  return Model;
};
