const { asyncHandler } = require('./async-handler');

/**
 * Middleware to fetch a resource and check ownership.
 * @param {Object} model - The Sequelize model to query.
 * @returns {Function} - The middleware function.
 */
exports.fetchResourceAndCheckOwnership = (model) => {
    return asyncHandler(async (req, res, next) => {
        const resource = await model.findByPk(req.params.id);

        if (resource) {
            if (resource.userId === req.currentUser.id) {
                req.resource = resource;
                next();
            } else {
                res.status(403).json({ message: 'Forbidden: You do not own this resource' });
            }
        } else {
            res.status(404).json({ message: `${model.name} not found` });
        }
    });
};
