var createError = require('http-errors');
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const sequelize = require('./models').sequelize;

// variable to enable global error logging
const enableGlobalErrorLogging = process.env.ENABLE_GLOBAL_ERROR_LOGGING === 'true';

// setup Routers
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/usersRouter');
const educationRouter = require('./routes/educationRouter');
const badgesRouter = require('./routes/badgesRouter');
const projectsRouter = require('./routes/projectsRouter');
const skillsRouter = require('./routes/skillsRouter');
const testimonialsRouter = require('./routes/testimonialsRouter');
const workRouter = require('./routes/workRouter');
const blogsRouter = require('./routes/blogsRouter');
const certificatesRouter = require('./routes/certificatesRouter');

// Create the Express app
var app = express();

// Enable All CORS Requests
app.use(cors());

// setup morgan which gives us http request logging
app.use(morgan('dev'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/education', educationRouter);
app.use('/api/badges', badgesRouter);
app.use('/api/projects', projectsRouter);
app.use('/api/skills', skillsRouter);
app.use('/api/testimonials', testimonialsRouter);
app.use('/api/work', workRouter);
app.use('/api/blogs', blogsRouter);
app.use('/api/certificates', certificatesRouter);

/**
 * Test the database connection.
 */
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

/**
 * Send 404 if no other route matched.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
app.use((req, res) => {
  res.status(404).json({
    message: 'Route Not Found',
  });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

/**
 * Error handler.
 * @param {Object} err - The error object.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 */
app.use(function (err, req, res, next) {
  if (enableGlobalErrorLogging) {
    console.error(`Global error handler: ${JSON.stringify(err.stack)}`);
  }

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
