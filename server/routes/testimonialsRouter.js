'use strict'

const express = require('express');

const testimonialsRouter = express.Router();
const { Testimonials, User } = require('../models');
const { authenticateUser } = require('../middleware/auth-user');
const { asyncHandler } = require('../middleware/async-handler');
const { fetchResourceAndCheckOwnership } = require('../middleware/fetch-resource-and-check');

testimonialsRouter.route('/')
    .get(asyncHandler(async (req, res) => {
        const testimonials = await Testimonials.findAll({
            include: [
                {
                    model: User,
                    as: 'user',
                    attributes: ['id', 'firstName', 'lastName', 'emailAddress'],
                },
            ]
        });

        res.status(200).json(testimonials);
        console.log(testimonials.map(testimonial => testimonial.get({ plain: true })));
    }))
    .post(authenticateUser, asyncHandler(async (req, res) => {
        try {
            const testimonial = await Testimonials.create(req.body);
            res.status(201).location(`/testimonials/${testimonial.id}`).end();
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

testimonialsRouter.route('/:id')
    .get(asyncHandler(async (req, res) => {
        const testimonial = await Testimonials.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    as: 'user',
                    attributes: ['id', 'firstName', 'lastName', 'emailAddress'],
                },
            ],
        });

        if (testimonial) {
            res.status(200).json(testimonial);
        } else {
            res.status(404).json({ message: 'Testimonial not found' });
        }
    }))
    .put(authenticateUser, fetchResourceAndCheckOwnership(Testimonials), asyncHandler(async (req, res) => {
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
    .delete(authenticateUser, fetchResourceAndCheckOwnership(Testimonials), asyncHandler(async (req, res) => {
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

module.exports = testimonialsRouter;
