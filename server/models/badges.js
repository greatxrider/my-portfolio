'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Badges extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Badges.belongsTo(models.User, {
        as: 'user',
        foreignKey: {
          fieldName: 'userId',
          allowNull: false,
        },
      });

      Badges.belongsTo(models.Issuer, {
        as: 'issuer',
        foreignKey: {
          fieldName: 'issuerId',
          allowNull: false,
        },
      });
    }
  }
  Badges.init({
    badgeSvgContent: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    badgeUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'A badge url is required',
        },
        notEmpty: {
          msg: 'Please provide a badge url',
        },
      },
    },
  }, {
    sequelize,
    modelName: 'Badges',
  });
  return Badges;
};
