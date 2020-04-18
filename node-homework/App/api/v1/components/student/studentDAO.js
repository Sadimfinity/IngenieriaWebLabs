/**
 *  Import student model 
 */
let studentModel = require('./student.model');

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