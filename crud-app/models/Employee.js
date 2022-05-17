import mongoose, { mongo } from "mongoose";

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Employee name is needed!"],
    trim: true,
  },
  employmentDate: {
    type: Date,
    default: Date.now,
    required: [true, "Employment date is needed!"],
  },
  department: {
    type: String,
    required: [true, "Employee department is needed!"],
    trim: true,
    maxlenght: 50,
  },
  position: {
    type: String,
    required: [true, "Employee position is needed!"],
    trim: true,
    maxlenght: 50,
  },
  salary: {
    type: String,
    required: [true, "Employee salary is needed!"],
    trim: true,
    maxlenght: 50,
  },
});
module.exports =
  mongoose.models.Employee || mongoose.model("Employee", employeeSchema);
