'use strict'
const express = require('express');

const blogsRouter = express.Router();
const { Blogs } = require('../models');
const { asyncHandler } = require('../middleware/async-handler');

blogsRouter.route('/')
    .get(asyncHandler(async (req, res) => {
        const blogs = await Blogs.findAll();
        res.status(200).json(blogs);
        console.log(blogs.map(blog => blog.get({ plain: true })));
    }))
    .post(asyncHandler(async (req, res) => {
        try {
            const blog = await Blogs.create(req.body);
            res.status(201).json(blog);
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

module.exports = blogsRouter;
