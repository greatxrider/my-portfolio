'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      imageUrlDesktop: {
        type: Sequelize.STRING
      },
      imageUrlMobile: {
        type: Sequelize.STRING
      },
      githubLink: {
        type: Sequelize.STRING
      },
      liveLink: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      },
      isFeatured: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Projects');
  }
};