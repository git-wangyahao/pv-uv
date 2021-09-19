/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('role_user', {
    role_code: {
      type: DataTypes.STRING(200),
      allowNull: false,
      primaryKey: true
    },
    user_account: {
      type: DataTypes.STRING(200),
      allowNull: false,
      primaryKey: true
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    create_account: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    tableName: 'role_user'
  });

  Model.associate = function() {

  }

  return Model;
};
