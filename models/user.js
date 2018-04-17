'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Image, { foreignKey: 'user_id', onDelete: 'CASCADE'})
    User.hasMany(models.Comment, { foreignKey: 'user_id', onDelete: 'CASCADE'})
  };
  return User;
};
