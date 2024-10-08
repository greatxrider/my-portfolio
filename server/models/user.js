'use strict';

const { Model, DataTypes } = require('sequelize');
const { ValidationError, ValidationErrorItem } = require('sequelize');
const bcrypt = require('bcrypt');

/**
 * User model definition.
 * @module models/User
 * @param {Object} sequelize - The Sequelize instance.
 * @returns {Object} - The User model.
 */
module.exports = (sequelize) => {
  /**
   * Represents a User.
   * @class
   * @extends Model
   */
  class User extends Model {
    /**
    * Helper method for defining associations.
    * This method is not a part of Sequelize lifecycle.
    * The `models/index` file will call this method automatically.
    * @param {Object} models - The models to associate with.
    */
    static associate(models) {
      // define association here
      User.hasMany(models.Education, {
        as: 'education',
        foreignKey: {
          fieldName: 'userId',
          allowNull: false,
        },
      });

      User.hasMany(models.Work, {
        as: 'work',
        foreignKey: {
          fieldName: 'userId',
          allowNull: false,
        },
      });

      User.hasMany(models.Skills, {
        as: 'skills',
        foreignKey: {
          fieldName: 'userId',
          allowNull: false,
        },
      });

      User.hasMany(models.Categories, {
        as: 'categories',
        foreignKey: {
          fieldName: 'userId',
          allowNull: false,
        },
      });

      User.hasMany(models.Projects, {
        as: 'projects',
        foreignKey: {
          fieldName: 'userId',
          allowNull: false,
        },
      });

      User.hasMany(models.Testimonials, {
        as: 'testimonials',
        foreignKey: {
          fieldName: 'userId',
          allowNull: false,
        },
      });

      User.hasMany(models.Blogs, {
        as: 'blogs',
        foreignKey: {
          fieldName: 'userId',
          allowNull: false,
        },
      });

      User.hasMany(models.Institutions, {
        as: 'institutions',
        foreignKey: {
          fieldName: 'userId',
          allowNull: false,
        },
      });

      User.hasMany(models.Certificates, {
        as: 'certificates',
        foreignKey: {
          fieldName: 'userId',
          allowNull: false,
        },
      });
    };
  };

  User.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
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
      validate: {
        notNull: {
          msg: 'A last name is required',
        },
        notEmpty: {
          msg: 'Please provide a last name',
        },
      },
    },
    emailAddress: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: 'The email you entered already exists',
      },
      validate: {
        notNull: {
          msg: 'An email is required',
        },
        isEmail: {
          msg: 'Please provide a valid email address',
        },
        notEmpty: {
          msg: 'Please provide an email',
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      set(val) {
        if (val) {
          // Validate password length before hashing
          if (val.length < 8 || val.length > 20) {
            throw new ValidationError('Validation error', [
              new ValidationErrorItem('The password should be between 8 and 20 characters in length', 'Validation error', 'password', val)
            ]);
          }
          // Hash the password
          const hashedPassword = bcrypt.hashSync(val, 10);
          this.setDataValue('password', hashedPassword);
        }
      },
      validate: {
        notNull: {
          msg: 'A password is required',
        },
        notEmpty: {
          msg: 'Please provide a value for password',
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });

  return User;
};
