/**
 * NPM packages
 */
const httpStatus = require('http-status');

/**
 *  Imported methods 
 */
const {
    createStudent,
    getAverageScore,
    applyToScholarship
} = require('./student');

const {
    getStudent,
    getStudents,
    updateStudent,
    deleteStudent
} = require('./studentDAO');

/**
 * This method get a record of DB and return HTTP 200 status. In case of error, returns and HTTP 404 or 400 status 
 * @param {*} req Request parameter of the HTTP Method
 * @param {*} res Response parameter of the HTTP Method
 */

async function getStudent(req, res) {
    let idStudent = req.params.id;
    if (idIsCorrect(idStudent)) {
        try {
            let newStudent = await getStudent(idStudent);
            if (newStudent) {
                return res.status(httpStatus.OK).send(newStudent);
            } else {
                return res.status(httpStatus.NOT_FOUND).send({ message: 'El registro no existe en la base de datos.' });
            }
        }
        catch (err) {
            return res.status(httpStatus.NOT_FOUND).send({ message: 'El registro no existe en la base de datos.' });
        }
    } else {
        return res.status(httpStatus.BAD_REQUEST).send({ message: 'Ingrese un id correcto' });
    }
}


/**
 * This method send the generated quote and image in HTTP 200 status, in case of error, returns and HTTP 500 status 
 * @param {*} req Request parameter of the HTTP Method
 * @param {*} res Response parameter of the HTTP Method
 */
async function getStudents(req, res) {
    try {
        let allStudents = await getStudents();
        return res.status(httpStatus.OK).send(allStudents);
    }
    catch (err) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR)
    }
}

async function updateStudent(req, res) {
    const idStudent = req.params.id;
    if (idIsCorrect(idStudent)) {
        try {
            let updatedObject = req.body;
            response = await updateStudentDAO(id, updatedObject);
            return res.sendStatus(httpStatus.OK);
        }
        catch (err) {
            return res.status(httpStatus.NOT_FOUND).send({ message: 'El registro no existe en la base de datos.' });
        }
    } else {
        return res.status(httpStatus.BAD_REQUEST).send({ message: 'Ingrese un id correcto' });
    }
}

function createStudent(req, res) {
    try {
        const newStudent = req.body
        response = createStudentDAO(newStudent);
        return res.sendStatus(httpStatus.OK);
    }
    catch (err) {
        return res.status(httpStatus.NOT_FOUND).send({ message: 'El registro no existe en la base de datos.' });
    }
}

/**
 * This method delete a record of DB and return HTTP 200 status. In case of error, returns and HTTP 404 or 400 status 
 * @param {*} req Request parameter of the HTTP Method
 * @param {*} res Response parameter of the HTTP Method
 */

async function deleteStudent(req, res) {
    let idStudent = req.params.id;
    if (idIsCorrect(idStudent)) {
        try {
            let deletedStudent = await deleteStudent(idStudent);
            if (deletedStudent) {
                return res.status(httpStatus.OK).send(deletedStudent);
            } else {
                return res.status(httpStatus.NOT_FOUND).send({ message: 'No se ha podido borrar el registro de la base de datos' });
            }
        }
        catch (err) {
            return res.status(httpStatus.NOT_FOUND).send({ message: 'No se ha podido borrar el registro de la base de datos' });
        }
    } else {
        return res.status(httpStatus.BAD_REQUEST).send({ message: 'Ingrese un id correcto' });
    }
}

/**
 * This method send the generated quote and image in HTTP 200 status, in case of error, returns and HTTP 500 status 
 * @param {*} req Request parameter of the HTTP Method
 * @param {*} res Response parameter of the HTTP Method
 */
async function getAverageScore(req, res) {
    try {
        let averageScore = await getAverageScore();
        let score = {
            averageScore: averageScore
        }
        return res.status(httpStatus.OK).send(score);
    }
    catch (err) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR)
    }
}

async function applyToScholarship(req, res) {
        try {
            scholarshipHolders = await applyToScholarship();
            return res.send(scholarshipHolders).sendStatus(httpStatus.OK);
        }
        catch (err) {
            return res.status(httpStatus.NOT_FOUND).send({ message: 'El registro no existe en la base de datos.' });
        }
}



/**
 * This method verifies if an id entered by parameter, matchs with the structure of generation of the ids made by mongoose
 * @param {*} id The identification of a record
 */

function idIsCorrect(id) {
    return id.match(/^[0-9a-fA-F]{24}$/);
}

module.exports = {
    getStudent,
    getStudents,
    updateStudent,
    createStudent,
    deleteStudent,
    getAverageScore,
    applyToScholarship
}