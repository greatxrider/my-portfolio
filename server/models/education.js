'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Education extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Education.belongsTo(models.User, {
        as: 'user',
        foreignKey: {
          fieldName: 'userId',
          allowNull: false,
        },
      });
    }
  }
  Education.init({
    school: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'A school is required',
        },
        notEmpty: {
          msg: 'Please provide a school',
        },
      },
    },
    degree: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: 'The degree you entered already exists',
      },
      validate: {
        notNull: {
          msg: 'A degree is required',
        },
        notEmpty: {
          msg: 'Please provide a degree',
        },
      },
    },
    courseWork: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'A course work is required',
        },
        notEmpty: {
          msg: 'Please provide a course work',
        },
      },
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'A city is required',
        },
        notEmpty: {
          msg: 'Please provide a city',
        },
      },
    },
    province: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'A province is required',
        },
        notEmpty: {
          msg: 'Please provide a province',
        },
      },
    },
    start: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Start date is required',
        },
        isDate: {
          msg: 'start date must be a valid date',
        },
      },
    },
    end: {
      type: DataTypes.DATE,
      allowNull: true,
      validate: {
        isDate: {
          msg: 'end date must be a valid date',
        },
      },
    },
  }, {
    sequelize,
    modelName: 'Education',
  });
  return Education;
};
