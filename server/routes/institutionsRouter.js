'use strict'

const express = require('express');

const institutionsRouter = express.Router();
const { Institutions, Certificates, User } = require('../models');
const { authenticateUser } = require('../middleware/auth-user');
const { asyncHandler } = require('../middleware/async-handler');
const { fetchResourceAndCheckOwnership } = require('../middleware/fetch-resource-and-check');

institutionsRouter.route('/')
    .get(asyncHandler(async (req, res) => {
        const institutions = await Institutions.findAll({
            include: [
                {
                    model: User,
                    as: 'user',
                    attributes: ['id', 'firstName', 'lastName', 'emailAddress'],
                },
                {
                    model: Certificates,
                    as: 'certificates',
                    attributes: ['id', 'certificateId', 'certificateImageUrl', 'certificateUrl', 'title', 'issueDate'],
                },
            ]
        });

        res.status(200).json(institutions);
        console.log(institutions.map(institution => institution.get({ plain: true })));
    }))
    .post(authenticateUser, asyncHandler(async (req, res) => {
        try {
            const institution = await Institutions.create(req.body);
            res.status(201).location(`/institutions/${institution.id}`).end();
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

institutionsRouter.route('/:id')
    .get(asyncHandler(async (req, res) => {
        const institution = await Institutions.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    as: 'user',
                    attributes: ['id', 'firstName', 'lastName', 'emailAddress'],
                },
            ],
        });

        if (institution) {
            res.status(200).json(institution);
        } else {
            res.status(404).json({ message: 'Institutions not found' });
        }
    }))
    .put(authenticateUser, fetchResourceAndCheckOwnership(Institutions), asyncHandler(async (req, res) => {
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
    .delete(authenticateUser, fetchResourceAndCheckOwnership(Institutions), asyncHandler(async (req, res) => {
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

module.exports = institutionsRouter;
