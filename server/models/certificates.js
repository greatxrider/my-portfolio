'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Certificates extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Certificates.belongsTo(models.User, {
        as: 'user',
        foreignKey: {
          fieldName: 'userId',
          allowNull: false,
        },
      });

      Certificates.belongsTo(models.Institutions, {
        as: 'institutions',
        foreignKey: {
          fieldName: 'institutionId',
          allowNull: false,
        },
      });
    }
  }
  Certificates.init({
    certificateId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: 'The certificate Id you entered already exists',
      },
      validate: {
        notNull: {
          msg: 'A certificate Id is required',
        },
        notEmpty: {
          msg: 'Please provide a certificate Id',
        },
      },
    },
    certificateImageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'A certificate image url is required',
        },
        notEmpty: {
          msg: 'Please provide a certificate image url',
        },
      },
    },
    certificateUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'A certificate url is required',
        },
        notEmpty: {
          msg: 'Please provide a certificate url',
        },
      },
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: 'The title you entered already exists',
      },
      validate: {
        notNull: {
          msg: 'A title is required',
        },
        notEmpty: {
          msg: 'Please provide a school title',
        },
      },
    },
    issueDate: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'An issue date is required',
        },
        notEmpty: {
          msg: 'Please provide an issue date',
        },
      },
    }
  }, {
    sequelize,
    modelName: 'Certificates',
  });
  return Certificates;
};
