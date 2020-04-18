/**
 *  Import student model 
 */
let studentModel = require('./student.model');

/**
 * Query the mongo database using the parameter id to delete a record
 * @param {String} id The id of some record saved on database
 */
function deleteStudentDAO(id) {
    return new Promise((resolve, reject) => {
        studentModel.findByIdAndRemove({
            "_id": id
        }, { useFindAndModify: false },
            function (err, doc) {
                if (err) {
                    reject(err);
                }
                resolve(doc);
            });
    });
}

/**
 * Query the mongo database using the parameter id to bring a record
 * @param {String} id The id of some record saved on database
 */
function getStudentDAO(id) {
    return new Promise((resolve, reject) => {
        studentModel.findOne({
            "_id": id
        },
            function (err, doc) {
                if (err) {
                    reject(err);
                }
                resolve(doc);
            })
    })
}

/**
 * Query the mongo database using the parameter id to bring a record
 * @param {String} id The id of some record saved on database
 */
function getStudentsDAO() {
    return new Promise((resolve, reject) => {
        studentModel.find({},
            function (err, doc) {
                if (err) {
                    reject(err);
                }
                resolve(doc);
            });
    })
}

function updateStudentDAO(id, updatedStudent) {
    return new Promise((resolve, reject) => {
        studentModel.findByIdAndUpdate({ "_id": id },
            { useFindAndModify: false }, updatedStudent,
            function (err, doc) {
                if (err) {
                    reject(err);
                }
                resolve(doc);
            })
    })
}

module.exports = { getStudentDAO, getStudentsDAO, deleteStudentDAO, updateStudentDAO }