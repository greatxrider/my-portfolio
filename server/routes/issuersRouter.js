'use strict'

const express = require('express');

const issuersRouter = express.Router();
const { Issuer, User, Badges } = require('../models');
const { authenticateUser } = require('../middleware/auth-user');
const { asyncHandler } = require('../middleware/async-handler');
const { fetchResourceAndCheckOwnership } = require('../middleware/fetch-resource-and-check');

issuersRouter.route('/')
    .get(asyncHandler(async (req, res) => {
        const issuers = await Issuer.findAll({
            include: [
                {
                    model: User,
                    as: 'user',
                    attributes: ['id', 'firstName', 'lastName', 'emailAddress'],
                },
                {
                    model: Badges,
                    as: 'badges',
                    attributes: ['id', 'badgeSvgContent', 'badgeUrl'],
                },
            ]
        });

        res.status(200).json(issuers);
        console.log(issuers.map(issuer => issuer.get({ plain: true })));
    }))
    .post(authenticateUser, asyncHandler(async (req, res) => {
        try {
            const issuer = await Issuer.create(req.body);
            res.status(201).location(`/issuers/${issuer.id}`).end();
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

issuersRouter.route('/:id')
    .get(asyncHandler(async (req, res) => {
        const issuer = await Issuer.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    as: 'user',
                    attributes: ['id', 'firstName', 'lastName', 'emailAddress'],
                },
            ],
        });

        if (issuer) {
            res.status(200).json(issuer);
        } else {
            res.status(404).json({ message: 'Issuer not found' });
        }
    }))
    .put(authenticateUser, fetchResourceAndCheckOwnership(Issuer), asyncHandler(async (req, res) => {
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
    .delete(authenticateUser, fetchResourceAndCheckOwnership(Issuer), asyncHandler(async (req, res) => {
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

module.exports = issuersRouter;
