'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Skills extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Skills.belongsTo(models.User, {
        as: 'user',
        foreignKey: {
          fieldName: 'userId',
          allowNull: false,
        },
      });
    }
  }
  Skills.init({
    technology: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'A skill is required',
        },
        notEmpty: {
          msg: 'Please provide a skill',
        },
      },
    },
    svgContent: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'A svgContent is required',
        },
        notEmpty: {
          msg: 'Please provide a svgContent',
        },
      },
    }
  }, {
    sequelize,
    modelName: 'Skills',
  });
  return Skills;
};