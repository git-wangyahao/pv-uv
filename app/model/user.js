/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('user', {
    user_account: {
      type: DataTypes.STRING(200),
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    user_name: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    department: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    station: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    telphone: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    area: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    login_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    oa_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
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
    loginid: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    tableName: 'user'
  });

  Model.associate = function() {

  }

  return Model;
};
