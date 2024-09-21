const { asyncHandler } = require('./async-handler');
const { Education } = require('../models');

/**
 * Middleware to fetch course and check ownership.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 */
exports.fetchEducationAndCheckOwnership = asyncHandler(async (req, res, next) => {
    const education = await Education.findByPk(req.params.id);

    if (education) {
        if (education.userId === req.currentUser.id) {
            req.education = education;
            next();
        } else {
            res.status(403).json({ message: 'Forbidden: You do not own this education' });
        }
    } else {
        res.status(404).json({ message: 'Education not found' });
    }
});
