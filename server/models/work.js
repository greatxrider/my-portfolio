'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Work extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Work.belongsTo(models.User, {
        as: 'user',
        foreignKey: {
          fieldName: 'userId',
          allowNull: false,
        },
      });
    }
  }
  Work.init({
    company: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'A company is required',
        },
        notEmpty: {
          msg: 'Please provide a company',
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
    country: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'A country is required',
        },
        notEmpty: {
          msg: 'Please provide a country',
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
    }
  }, {
    sequelize,
    modelName: 'Work',
  });
  return Work;
};
