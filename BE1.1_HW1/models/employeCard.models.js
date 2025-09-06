const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    employeeId: {
      type: String,
      required: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: String,
    address: String,
    profileImageUrl: String,
    
);

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
