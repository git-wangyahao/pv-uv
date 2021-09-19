/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('browsing_history', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    uuid: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    webName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    systemId: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: true,
      get () {
        return this.getDataValue('create_time') ? moment(this.getDataValue('create_time')).format('YYYY-MM-DD HH:mm:ss') : null;
      }
    }
  }, {
    tableName: 'browsing_history'
  });

  Model.associate = function() {

  }

  return Model;
};
