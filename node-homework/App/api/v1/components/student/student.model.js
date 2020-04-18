/**
 * NPM packages
 */
const mongoose = require('mongoose');


/**
 * Creates the model of the records saved in database
 */
const student = {
    name: {
        type: String,
        required: true
    },
    identification: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false
    },
    score: {
        type: Number,
        min: 0,
        max: 5,
        required: true
    },
    stratum: {
        type: Number,
        required: true,
        min: 1,
        max: 6,
        validate: {
            validator: Number.isInteger,
            message: '{VALUE} is not an integer value'
        }
    },
    scholarship: {
        type: Boolean,
        required: true,
        default: false
    }
}

/**
 * Create and save the schema of the records that will being saved on DB
 */

let studentSchema = new mongoose.Schema(student);
let studentModel = mongoose.model('Quote', studentSchema);

module.exports = studentModel;