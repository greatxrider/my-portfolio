'use strict'

const express = require('express');

const certificatesRouter = express.Router();
const { Certificates, User } = require('../models');
const { authenticateUser } = require('../middleware/auth-user');
const { asyncHandler } = require('../middleware/async-handler');
const { fetchResourceAndCheckOwnership } = require('../middleware/fetch-resource-and-check');

certificatesRouter.route('/')
    .get(asyncHandler(async (req, res) => {
        const certificates = await Certificates.findAll({
            include: [
                {
                    model: User,
                    as: 'user',
                    attributes: ['id', 'firstName', 'lastName', 'emailAddress'],
                },
            ]
        });

        res.status(200).json(certificates);
        console.log(certificates.map(certificate => certificate.get({ plain: true })));
    }))
    .post(authenticateUser, asyncHandler(async (req, res) => {
        try {
            const certificate = await Certificates.create(req.body);
            res.status(201).location(`/certificates/${certificate.id}`).end();
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

certificatesRouter.route('/:id')
    .get(asyncHandler(async (req, res) => {
        const certificate = await Certificates.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    as: 'user',
                    attributes: ['id', 'firstName', 'lastName', 'emailAddress'],
                },
            ],
        });

        if (certificate) {
            res.status(200).json(certificate);
        } else {
            res.status(404).json({ message: 'Certificate not found' });
        }
    }))
    .put(authenticateUser, fetchResourceAndCheckOwnership(Certificates), asyncHandler(async (req, res) => {
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
    .delete(authenticateUser, fetchResourceAndCheckOwnership(Certificates), asyncHandler(async (req, res) => {
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

module.exports = certificatesRouter;
