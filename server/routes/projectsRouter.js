'use strict'

const express = require('express');

const projectsRouter = express.Router();
const { Projects, Categories, User, Skills } = require('../models');
const { authenticateUser } = require('../middleware/auth-user');
const { asyncHandler } = require('../middleware/async-handler');
const { fetchResourceAndCheckOwnership } = require('../middleware/fetch-resource-and-check');

projectsRouter.route('/')
    .get(asyncHandler(async (req, res) => {
        const projects = await Projects.findAll({
            include: [
                {
                    model: User,
                    as: 'user',
                    attributes: ['id', 'firstName', 'lastName', 'emailAddress'],
                },
                {
                    model: Categories,
                    as: 'category',
                    attributes: ['id', 'name', 'description'],
                },
                {
                    model: Skills,
                    as: 'technologies',
                    through: {
                        // this removes the through model properties from being included
                        attributes: [],
                    },
                }
            ]
        });

        res.status(200).json(projects);
        console.log(projects.map(project => project.get({ plain: true })));
    }))
    .post(authenticateUser, asyncHandler(async (req, res) => {
        try {
            const { title, description, imageUrlDesktop, imageUrlMobile, deviceType, githubLink, liveLink, categoryName, isFeatured, categoryId, userId, technologies } = req.body;

            // Create a new project
            const project = await Projects.create({
                title,
                description,
                imageUrlDesktop,
                imageUrlMobile,
                deviceType,
                githubLink,
                liveLink,
                categoryName,
                isFeatured,
                categoryId,
                userId
            });

            // Optimize skill association by querying all technologies in one go
            if (technologies && technologies.length > 0) {
                const technologyIds = technologies.map(tech => tech.id);
                const existingSkills = await Skills.findAll({
                    where: { id: technologyIds }
                });

                // Create new technologies not found in the database
                const newTechnologies = technologies.filter(tech => !existingSkills.some(skill => skill.id === tech.id));
                const createdSkills = await Skills.bulkCreate(newTechnologies, { returning: true });

                // Combine existing and newly created skills
                const skillInstances = [...existingSkills, ...createdSkills];

                // Associate the project with the technologies
                await project.addTechnologies(skillInstances);
            }

            res.status(201).location(`/projects/${project.id}`).end();
        } catch (error) {
            console.log('ERROR: ', error.name);

            if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
                const errors = error.errors.map(err => err.message);
                res.status(400).json({ errors });
            } else {
                res.status(500).json({ message: 'Internal Server Error' });
            }
        }
    }));

projectsRouter.route('/:id')
    .get(asyncHandler(async (req, res) => {
        const project = await Projects.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    as: 'user',
                    attributes: ['id', 'firstName', 'lastName', 'emailAddress'],
                },
                {
                    model: Categories,
                    as: 'categories',
                    attributes: ['id', 'name', 'description'],
                },
                {
                    model: Skills,
                    as: 'technologies',
                    through: {
                        // this removes the through model properties from being included
                        attributes: [],
                    },
                }
            ]
        });

        if (project) {
            res.status(200).json(project);
        } else {
            res.status(404).json({ message: 'Project not found' });
        }
    }))
    .put(authenticateUser, fetchResourceAndCheckOwnership(Projects), asyncHandler(async (req, res) => {
        try {
            await req.resource.update(req.body);
            res.status(204).end();
        } catch (error) {
            console.log('ERROR: ', error.name);

            if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
                const errors = error.errors.map(error => error.message);
                res.status(400).json({ errors });
            } else {
                res.status(500).json({ message: 'Internal Server Error' });
            }
        }
    }))
    .delete(authenticateUser, fetchResourceAndCheckOwnership(Projects), asyncHandler(async (req, res) => {
        try {
            await req.resource.destroy();
            res.status(204).end();
        } catch (error) {
            console.log('ERROR: ', error.name);

            if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
                const errors = error.errors.map(error => error.message);
                res.status(400).json({ errors });
            } else {
                res.status(500).json({ message: 'Internal Server Error' });
            }
        }
    }));

module.exports = projectsRouter;
