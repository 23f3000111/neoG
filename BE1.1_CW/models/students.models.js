const mongoose = require("momgoose")

const studentSchema = new mongoose.Schema({
    studentRegNumber: String,
    studentId: String,
    studentName: String,
    fatherName: String,
    class: String,
    emegencyContact: Number,
    studentProfiileURL: {
        type: Boolean,
        default: true,
    },
})

const Student = mongoose.model("Student", studentSchema)

module.exports = Student;
