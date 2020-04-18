/**
 *  Import student model 
 */
let studentModel = require('./student.model');

const { getStudentsDAO, updateStudentDAO } = require('./studentDAO')

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

async function calculateAverageScore(){
    const students = await getStudentsDAO();
    if(students.length > 0){
        let average = 0;
        students.forEach(student => average = average + student.score);
        average = average / students.length;
        return average;
    } else {
        return 0
    }

}

async function updateScholarship(){
    const students = await getStudentsDAO();
    if(students.length > 0){
        const scholarshipHolders = students.filter(student => student.score >= 4.5 && student.stratum <= 3)
        await scholarshipHolders.forEach(async student => {
            await updateStudentDAO(student.id, {scholarship: true});
            student.scholarship = true;
        })
        return scholarshipHolders
    } else {
        return false
    }
}


module.exports = { 
    saveStudent,
    calculateAverageScore,
    updateScholarship 
};
