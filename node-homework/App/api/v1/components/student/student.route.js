/**
 * NPM required packages
 */
const Router = require('express').Router;

/**
 *  Imported methods of controller 
 */
const { getStudent, 
        getStudents, 
        updateStudent, 
        createStudent, 
        deleteStudent, 
        getAverageScore, 
        applyToScholarship} = require('./student.controller')


let router = new Router();

/**
 * Endpoint of the generate-changing-life-quote GET method
 */
router.route('/students/:id')
    .get((req,res) => {
        getStudent(req, res);
    })

/**
 * Endpoint of the generate-changing-life-quote GET method
 */
router.route('/students/')
    .get((req,res) => {
        getStudents(req, res);
    })

router.route('/students/:id')
    .put((req,res) => {
        updateStudent(req, res);
    })

router.route('/students/')
    .post((req,res) => {
        createStudent(req, res);
    })

router.route('/students/:id')
    .delete((req,res) => {
        deleteStudent(req, res);
    }) 

router.route('/average/students/')
    .get((req,res) => {
        getAverageScore(req, res);
    }) 

router.route('/scholarship/students//')
    .patch((req,res) => {
        applyToScholarship(req, res);
    }) 

module.exports = router;