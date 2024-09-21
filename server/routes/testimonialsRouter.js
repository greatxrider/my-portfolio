'use strict'

const express = require('express');
const testimonialsRouter = express.Router();

const { Testimonials } = require('../models');
const { asyncHandler } = require('../middleware/async-handler');

testimonialsRouter.route('/')
    .get(asyncHandler(async (req, res) => {
        const testimonials = await Testimonials.findAll();
        res.status(200).json(testimonials);
        console.log(testimonials.map(testimonial => testimonial.get({ plain: true })));
    }))
    .post(asyncHandler(async (req, res) => {
        try {
            const testimonial = await Testimonials.create(req.body);
            res.status(201).json(testimonial);
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

module.exports = testimonialsRouter;
