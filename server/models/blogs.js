'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Blogs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Blogs.belongsTo(models.User, {
        as: 'user',
        foreignKey: {
          fieldName: 'userId',
          allowNull: false,
        },
      });
    }
  }
  Blogs.init({
    date: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'A date is required',
        },
        notEmpty: {
          msg: 'Please provide a date',
        },
      },
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'A title is required',
        },
        notEmpty: {
          msg: 'Please provide a title',
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
    blogLink: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'A blogLink is required',
        },
        notEmpty: {
          msg: 'Please provide a blogLink',
        },
      },
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'An imageUrl is required',
        },
        notEmpty: {
          msg: 'Please provide an imageUrl',
        },
      },
    }
  }, {
    sequelize,
    modelName: 'Blogs',
  });
  return Blogs;
};