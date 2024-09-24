'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Institutions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Institutions.belongsTo(models.User, {
        as: 'user',
        foreignKey: {
          fieldName: 'userId',
          allowNull: false,
        },
      });

      Institutions.hasMany(models.Certificates, {
        as: 'certificates',
        foreignKey: {
          fieldName: 'institutionId',
          allowNull: false,
        },
      });
    }
  }
  Institutions.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: 'The school name you entered already exists',
      },
      validate: {
        notNull: {
          msg: 'A school name is required',
        },
        notEmpty: {
          msg: 'Please provide a school name',
        },
      },
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: 'The school url you entered already exists',
      },
      validate: {
        notNull: {
          msg: 'A school url is required',
        },
        notEmpty: {
          msg: 'Please provide a school url',
        },
      },
    }
  }, {
    sequelize,
    modelName: 'Institutions',
  });
  return Institutions;
};