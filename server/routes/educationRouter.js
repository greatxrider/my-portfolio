'use strict'

const express = require('express');

const educationRouter = express.Router();
const { Education } = require('../models');
const { asyncHandler } = require('../middleware/async-handler');

educationRouter.route('/')
    .get(asyncHandler(async (req, res) => {
        const education = await Education.findAll();
        res.status(200).json(education);
        console.log(education.map(education => education.get({ plain: true })));
    }))
    .post(asyncHandler(async (req, res) => {
        try {
            const education = await Education.create(req.body);
            res.status(201).json(education);
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

module.exports = educationRouter;
