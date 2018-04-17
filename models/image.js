'use strict';
module.exports = (sequelize, DataTypes) => {
  var Image = sequelize.define('Image', {
    src: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    tag_id: DataTypes.INTEGER
  }, {});
  Image.associate = function(models) {
    // associations can be defined here
    Image.belongsTo(models.User, {foreignKey: 'user_id'})
    Image.hasMany(models.Comment, {foreignKey: 'image_id'})
    Image.hasMany(models.Tag, {foreignKey: 'image_id'})
  };
  return Image;
};
