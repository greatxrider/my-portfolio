'use strict'

const express = require('express');
const certificatesRouter = express.Router();

const { Certificates } = require('../models');
const { asyncHandler } = require('../middleware/async-handler');

certificatesRouter.route('/')
    .get(asyncHandler(async (req, res) => {
        const certificates = await Certificates.findAll();
        res.status(200).json(certificates);
        console.log(certificates.map(certificate => certificate.get({ plain: true })));
    }))
    .post(asyncHandler(async (req, res) => {
        try {
            const certificate = await Certificates.create(req.body);
            res.status(201).json(certificate);
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
