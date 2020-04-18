/**
 *  Import quote model 
 */
let studentModel = require('./student.model');

async function saveStudent(student){
    const newStudent = {
        name: student.name,
        identification: student.identification,
        email: student.email,
        score: student.score,
        stratum: student.stratum,
        scholarship: false
    }
    let studentSaved = new studentModel(newStudent).save();
    return studentSaved;
}



module.exports = { saveStudent };
