/**
 * NPM packages
 */
const Router = require('express').Router;

/**
 * Import the different routes of the features
 */
let student = require('./components/student/student.route');

let router = new Router();

router.use('/students/', student);

module.exports = router;

