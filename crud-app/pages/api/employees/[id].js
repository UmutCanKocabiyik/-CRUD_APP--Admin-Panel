import dbConnect from "../../../utils/dbConnect";
import Employee from "../../../models/Employee";

dbConnect();

export default async (req, res) => {
  const {
    query: { id },
    body,
    method,
  } = req;
  switch (method) {
    case "GET":
      try {
        const singleEmployee = await Employee.findById(id);
        if (!singleEmployee) {
          res.status(400).json(error);
        }
        res.status(200).json(singleEmployee);
      } catch (error) {
        res.status(400).json(error);
      }
      break;
    case "PUT":
      try {
        const editedEmployee = await Employee.findByIdAndUpdate(id, body, {
          new: true,
          runValdators: true,
        });
        if (!editedEmployee) {
          res.status(400).json(error);
        }
        res.status(201).json(editedEmployee);
      } catch (error) {
        res.status(400).json(error);
      }
      break;
    case "DELETE":
      try {
        const deletedEmployee = await Employee.deleteOne({ _id: id });
        if (!deletedEmployee) {
          res.status(400).json(error);
        }
        res.status(204).json();
      } catch (error) {
        res.status(400).json(error);
      }
      break;
    default:
      res.status(400).json(error);
      break;
  }
};
