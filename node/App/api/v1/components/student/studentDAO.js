/**
 *  Import student model 
 */
let studentModel = require('./student.model');

/**
 * Query the mongo database using the parameter id to delete a record
 * @param {String} id The id of some record saved on database
 */
function deleteStudent(id) {
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
function getStudent(id) {
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
function getStudents() {
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

function updateStudent(id, updatedStudent){
    return new Promise((resolve, reject) => {
        studentModel.findByIdAndUpdate({ "_id": id}, updatedStudent,
        function(err, doc){
            if (err){
                reject(err);
            }
            resolve(doc);
        })
    })
}

module.exports = { getStudent, getStudents, deleteStudent, updateStudent }