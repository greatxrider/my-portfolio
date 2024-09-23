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
      Testimonials.belongsTo(models.User, {
        as: 'user',
        foreignKey: {
          fieldName: 'userId',
          allowNull: false,
        },
      });
    }
  }
  Testimonials.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: 'The first name you entered already exists',
      },
      validate: {
        notNull: {
          msg: 'A first name is required',
        },
        notEmpty: {
          msg: 'Please provide a first name',
        },
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: 'The last name you entered already exists',
      },
      validate: {
        notNull: {
          msg: 'A last name is required',
        },
        notEmpty: {
          msg: 'Please provide a last name',
        },
      },
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'A comment is required',
        },
        notEmpty: {
          msg: 'Please provide a comment',
        },
      },
    },
    rating: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'A rating is required',
        },
        notEmpty: {
          msg: 'Please provide a rating',
        },
      },
    },
    profileImageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'An profile image url is required',
        },
        notEmpty: {
          msg: 'Please provide a profile image url',
        },
      },
    },
    jobTitle: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'A job title is required',
        },
        notEmpty: {
          msg: 'Please provide a job title',
        },
      },
    }
  }, {
    sequelize,
    modelName: 'Testimonials',
  });
  return Testimonials;
};