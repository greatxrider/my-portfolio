'use strict'

const express = require('express');

const educationRouter = express.Router();
const { Education, User } = require('../models');
const { authenticateUser } = require('../middleware/auth-user');
const { asyncHandler } = require('../middleware/async-handler');
const { fetchEducationAndCheckOwnership } = require('../middleware/fetch-and-check');

educationRouter.route('/')
    .get(asyncHandler(async (req, res) => {
        const education = await Education.findAll({
            include: [
                {
                    model: User,
                    as: 'user',
                    attributes: ['id', 'firstName', 'lastName', 'emailAddress'],
                },
            ],
            order: [
                ['end', 'DESC']
            ],
        });

        res.status(200).json(education);
        console.log(education.map(education => education.get({ plain: true })));
    }))
    .post(authenticateUser, asyncHandler(async (req, res) => {
        try {
            const education = await Education.create(req.body);
            res.status(201).location(`/education/${education.id}`).end();
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

educationRouter.route('/:id')
    .get(asyncHandler(async (req, res) => {
        const education = await Education.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    as: 'user',
                    attributes: ['id', 'firstName', 'lastName', 'emailAddress'],
                },
            ],
        });

        if (education) {
            res.status(200).json(education);
        } else {
            res.status(404).json({ message: 'Education not found' });
        }
    }))
    .put(authenticateUser, fetchEducationAndCheckOwnership, asyncHandler(async (req, res) => {
        try {
            await req.education.update(req.body);
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
    .delete(authenticateUser, fetchEducationAndCheckOwnership, asyncHandler(async (req, res) => {
        try {
            await req.education.destroy();
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

module.exports = educationRouter;
