'use strict'

const express = require('express');

const badgesRouter = express.Router();
const { Badges } = require('../models');
const { asyncHandler } = require('../middleware/async-handler');

badgesRouter.route('/')
    .get(asyncHandler(async (req, res) => {
        const badges = await Badges.findAll();
        res.status(200).json(badges);
        console.log(badges.map(badge => badge.get({ plain: true })));
    }))
    .post(asyncHandler(async (req, res) => {
        try {
            const badge = await Badges.create(req.body);
            res.status(201).json(badge);
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

module.exports = badgesRouter;
