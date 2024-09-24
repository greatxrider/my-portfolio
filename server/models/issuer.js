'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Issuer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Issuer.belongsTo(models.User, {
        as: 'user',
        foreignKey: {
          fieldName: 'userId',
          allowNull: false,
        },
      });

      Issuer.hasMany(models.Badges, {
        as: 'badges',
        foreignKey: {
          fieldName: 'issuerId',
          allowNull: false,
        },
      });
    }
  }
  Issuer.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: 'The issuer name you entered already exists',
      },
      validate: {
        notNull: {
          msg: 'An issuer name is required',
        },
        notEmpty: {
          msg: 'Please provide an issuer name',
        },
      },
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: 'The issuer url you entered already exists',
      },
      validate: {
        notNull: {
          msg: 'An issuer url is required',
        },
        notEmpty: {
          msg: 'Please provide an issuer url',
        },
      },
    }
  }, {
    sequelize,
    modelName: 'Issuer',
  });
  return Issuer;
};