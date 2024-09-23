'use strict'

const express = require('express');

const skillsRouter = express.Router();
const { Skills, User, Projects } = require('../models');
const { authenticateUser } = require('../middleware/auth-user');
const { asyncHandler } = require('../middleware/async-handler');
const { fetchResourceAndCheckOwnership } = require('../middleware/fetch-resource-and-check');

skillsRouter.route('/')
    .get(asyncHandler(async (req, res) => {
        const skills = await Skills.findAll({
            include: [
                {
                    model: User,
                    as: 'user',
                    attributes: ['id', 'firstName', 'lastName', 'emailAddress'],
                },
                {
                    model: Projects,
                    as: 'projects',
                    attributes: ['id', 'title', 'description', 'imageUrlDesktop', 'imageUrlMobile', 'deviceType', 'githubLink', 'liveLink', 'categoryName', 'isFeatured', 'categoryId', 'userId'],
                    through: {
                        // this removes the through model properties from being included
                        attributes: [],
                    },
                },
            ]
        });

        res.status(200).json(skills);
        console.log(skills.map(skill => skill.get({ plain: true })));
    }))
    .post(authenticateUser, asyncHandler(async (req, res) => {
        try {
            const skills = await Skills.create(req.body);
            res.status(201).location(`/skills/${skills.id}`).end();
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

skillsRouter.route('/:id')
    .get(asyncHandler(async (req, res) => {
        const skills = await Skills.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    as: 'user',
                    attributes: ['id', 'firstName', 'lastName', 'emailAddress'],
                },
            ],
        });

        if (skills) {
            res.status(200).json(skills);
        } else {
            res.status(404).json({ message: 'Skills not found' });
        }
    }))
    .put(authenticateUser, fetchResourceAndCheckOwnership(Skills), asyncHandler(async (req, res) => {
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
    .delete(authenticateUser, fetchResourceAndCheckOwnership(Skills), asyncHandler(async (req, res) => {
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

module.exports = skillsRouter;
