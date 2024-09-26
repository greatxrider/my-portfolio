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

      Skills.belongsToMany(models.Projects, {
        as: 'projects',
        through: 'ProjectTechnologies',
        foreignKey: 'skillsId',
        otherKey: 'projectId',
      });
    }
  }
  Skills.init({
    technology: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: 'The technology you entered already exists',
      },
      validate: {
        notNull: {
          msg: 'A skill is required',
        },
        notEmpty: {
          msg: 'Please provide a skill',
        },
      },
    },
    imgShieldsLogo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: 'The imgShieldsLogo you entered already exists',
      },
      validate: {
        notNull: {
          msg: 'A imgShieldsLogo is required',
        },
        notEmpty: {
          msg: 'Please provide a imgShieldsLogo',
        },
      },
    },
    svgContent: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: 'The svgContent you entered already exists',
      },
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