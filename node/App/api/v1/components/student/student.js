/**
 * NPM packages
 */
const axios = require("axios");
const ImageSearchAPIClient = require('azure-cognitiveservices-imagesearch');
const CognitiveServicesCredentials = require('ms-rest-azure').CognitiveServicesCredentials;

/**
 *  Import quote model 
 */
let studentModel = require('./student.model');

async function createStudent(student){
    const newStudent = {
        name: student.name,
        identification: student.identification,
        email: student.email,
        score: student.score,
        stratum: student.stratum,
        scholarship: False
    }
    let studentSaved = new studentModel(newStudent).save();
    return studentSaved;
}



module.exports = { createStudent };
