/**
 * NPM packages
 */
const httpStatus = require('http-status');

/**
 *  Imported methods 
 */
const {
    saveStudent,
    calculateAverageScore,
    updateScholarship
} = require('./student');

const {
    getStudentDAO,
    getStudentsDAO,
    updateStudentDAO,
    deleteStudentDAO
} = require('./studentDAO');

async function getStudent(req, res) {
    let idStudent = req.params.id;
    if (idIsCorrect(idStudent)) {
        try {
            let newStudent = await getStudentDAO(idStudent);
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

async function getStudents(req, res) {
    try {
        let allStudents = await getStudentsDAO();
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
            response = await updateStudentDAO(idStudent, updatedObject);
            return res.send(response).status(httpStatus.OK);
        }
        catch (err) {
            return res.status(httpStatus.NOT_FOUND).send({ message: 'El registro no existe en la base de datos.' });
        }
    } else {
        return res.status(httpStatus.BAD_REQUEST).send({ message: 'Ingrese un id correcto.' });
    }
}

async function createStudent(req, res) {
        const newStudent = req.body
        if(req.body){
            try{
                response = await saveStudent(newStudent);
                return res.send(response).status(httpStatus.OK);
            } catch {
                res.status(httpStatus.BAD_REQUEST).send({ message: 'Ingrese los parámetros necesarios para la creación del estudiante.' }); 
            }
        } else {
            return res.status(httpStatus.BAD_REQUEST).send({ message: 'Ingrese los parámetros necesarios para la creación del estudiante.' });
        }

}

async function deleteStudent(req, res) {
    let idStudent = req.params.id;
    if (idIsCorrect(idStudent)) {
        try {
            let deletedStudent = await deleteStudentDAO(idStudent);
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

async function getAverageScore(req, res) {
    try {
        let averageScore = await calculateAverageScore();
        if(averageScore != 0){
            let score = {
                averageScore: averageScore
            }
            return res.status(httpStatus.OK).send(score);
        } else {
            return res.status(httpStatus.NO_CONTENT).send({ message: 'No se encontraron registros en la base de datos.'});
        }

    }
    catch (err) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR);
    }
}

async function applyToScholarship(req, res) {
        try {
            const scholarshipHolders = await updateScholarship();
            if(scholarshipHolders){
                return res.send(scholarshipHolders).status(httpStatus.OK);
            } else {
                return res.status(httpStatus.NO_CONTENT).send({ message: 'No se encontraron registros en la base de datos.'});
            }
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