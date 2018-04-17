'use strict';
module.exports = (sequelize, DataTypes) => {
  var Comment = sequelize.define('Comment', {
    description: DataTypes.STRING,
    image_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    username: DataTypes.STRING
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
    Comment.belongsTo(models.Image, {foreignKey: 'image_id'});
    Comment.belongsTo(models.User, {foreignKey: 'user_id'});
  };
  return Comment;
};
