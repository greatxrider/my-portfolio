'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Categories.hasMany(models.Projects, {
        as: 'projects',
        foreignKey: {
          fieldName: 'categoryId',
          allowNull: false,
        },
      });

      Categories.belongsTo(models.User, {
        as: 'user',
        foreignKey: {
          fieldName: 'userId',
          allowNull: false,
        },
      });
    }
  }
  Categories.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'A category name is required',
        },
        notEmpty: {
          msg: 'Please provide a category name',
        },
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'A description is required',
        },
        notEmpty: {
          msg: 'Please provide a description',
        },
      },
    },
  }, {
    sequelize,
    modelName: 'Categories',
  });
  return Categories;
};