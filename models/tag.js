'use strict';
module.exports = (sequelize, DataTypes) => {
  var Tag = sequelize.define('Tag', {
    tag_name: DataTypes.STRING,
    image_id: DataTypes.INTEGER
  }, {});
  Tag.associate = function(models) {
    // associations can be defined here
    Tag.belongsTo(models.Image, {foreignKey: 'image_id'})
  };
  return Tag;
};
