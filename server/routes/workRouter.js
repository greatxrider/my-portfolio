'use strict'

const express = require('express');
const workRouter = express.Router();

const { Work } = require('../models');
const { asyncHandler } = require('../middleware/async-handler');

workRouter.route('/')
    .get(asyncHandler(async (req, res) => {
        const work = await Work.findAll();
        res.status(200).json(work);
        console.log(work.map(work => work.get({ plain: true })));
    }))
    .post(asyncHandler(async (req, res) => {
        try {
            const work = await Work.create(req.body);
            res.status(201).json(work);
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

module.exports = workRouter;
