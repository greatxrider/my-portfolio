'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Projects extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Projects.belongsTo(models.Categories, {
        as: 'category',
        foreignKey: {
          fieldName: 'categoryId',
          allowNull: false,
        },
      });

      Projects.belongsTo(models.User, {
        as: 'user',
        foreignKey: {
          fieldName: 'userId',
          allowNull: false,
        },
      });

      Projects.belongsToMany(models.Skills, {
        as: 'technologies',
        through: 'ProjectTechnologies',
        foreignKey: 'projectId',
        otherKey: 'skillsId',
      });
    }
  }
  Projects.init({
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
    imageUrlDesktop: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'A image desktop url is required',
        },
        notEmpty: {
          msg: 'Please provide a image desktop url',
        },
      },
    },
    imageUrlMobile: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'A image mobile url is required',
        },
        notEmpty: {
          msg: 'Please provide a image mobile url',
        },
      },
    },
    deviceType: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'macpro',
      validate: {
        notNull: {
          msg: 'A device type is required',
        },
        notEmpty: {
          msg: 'Please provide a device image url',
        },
      },
    },
    githubLink: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'A github link is required',
        },
        notEmpty: {
          msg: 'Please provide a github link',
        },
      },
    },
    liveLink: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'A live link is required',
        },
        notEmpty: {
          msg: 'Please provide a live link',
        },
      },
    },
    categoryName: {
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
    isFeatured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  }, {
    sequelize,
    modelName: 'Projects',
  });
  return Projects;
};
