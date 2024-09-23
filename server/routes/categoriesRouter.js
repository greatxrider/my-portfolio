'use strict'

const express = require('express');

const categoriesRouter = express.Router();
const { Projects, Categories, User } = require('../models');
const { authenticateUser } = require('../middleware/auth-user');
const { asyncHandler } = require('../middleware/async-handler');
const { fetchResourceAndCheckOwnership } = require('../middleware/fetch-resource-and-check');

categoriesRouter.route('/')
    .get(asyncHandler(async (req, res) => {
        const categories = await Categories.findAll({
            include: [
                {
                    model: User,
                    as: 'user',
                    attributes: ['id', 'firstName', 'lastName', 'emailAddress'],
                },
                {
                    model: Projects,
                    as: 'projects',
                    attributes: ['id', 'title', 'description', 'imageUrlDesktop', 'imageUrlMobile', 'deviceType', 'deviceImageUrl', 'githubLink', 'liveLink', 'categoryName', 'isFeatured', 'categoryId', 'userId'],
                },
            ]
        });

        res.status(200).json(categories);
        console.log(categories.map(category => category.get({ plain: true })));
    }))
    .post(authenticateUser, asyncHandler(async (req, res) => {
        try {
            const category = await Categories.create(req.body);
            res.status(201).location(`/categories/${category.id}`).end();
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

categoriesRouter.route('/:id')
    .get(asyncHandler(async (req, res) => {
        const category = await Categories.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    as: 'user',
                    attributes: ['id', 'firstName', 'lastName', 'emailAddress'],
                },
                {
                    model: Projects,
                    as: 'projects',
                    attributes: ['id', 'title', 'description', 'imageUrlDesktop', 'imageUrlMobile', 'deviceType', 'deviceImageUrl', 'githubLink', 'liveLink', 'categoryName', 'isFeatured', 'categoryId', 'userId'],
                },
            ]
        });

        if (category) {
            res.status(200).json(category);
        } else {
            res.status(404).json({ message: 'Category not found' });
        }
    }))
    .put(authenticateUser, fetchResourceAndCheckOwnership(Categories), asyncHandler(async (req, res) => {
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
    .delete(authenticateUser, fetchResourceAndCheckOwnership(Categories), asyncHandler(async (req, res) => {
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

module.exports = categoriesRouter;
