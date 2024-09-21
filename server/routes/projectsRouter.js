'use strict'

const express = require('express');
const projectsRouter = express.Router();

const { Projects } = require('../models');
const { asyncHandler } = require('../middleware/async-handler');

projectsRouter.route('/')
    .get(asyncHandler(async (req, res) => {
        const projects = await Projects.findAll();
        res.status(200).json(projects);
        console.log(projects.map(project => project.get({ plain: true })));
    }))
    .post(asyncHandler(async (req, res) => {
        try {
            const project = await Projects.create(req.body);
            res.status(201).json(project);
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
