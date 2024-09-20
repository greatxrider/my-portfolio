'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Testimonials extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Testimonials.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    comment: DataTypes.STRING,
    rating: DataTypes.STRING,
    profileImageUrl: DataTypes.STRING,
    jobTitle: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Testimonials',
  });
  return Testimonials;
};