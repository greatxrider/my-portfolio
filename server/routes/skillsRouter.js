'use strict'

const express = require('express');
const skillsRouter = express.Router();

const { Skills } = require('../models');
const { asyncHandler } = require('../middleware/async-handler');

skillsRouter.route('/')
    .get(asyncHandler(async (req, res) => {
        const skills = await Skills.findAll();
        res.status(200).json(skills);
        console.log(skills.map(skill => skill.get({ plain: true })));
    })).post(asyncHandler(async (req, res) => {
        try {
            const skill = await Skills.create(req.body);
            res.status(201).json(skill);
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
