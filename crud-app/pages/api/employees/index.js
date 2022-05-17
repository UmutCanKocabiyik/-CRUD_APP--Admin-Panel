import dbConnect from "../../../utils/dbConnect";
import Employee from "../../../models/Employee";

dbConnect();

export default async (req, res) => {
  const { body, method } = req;
  switch (method) {
    case "GET":
      try {
        const allEmployees = await Employee.find();
        res.status(200).json(allEmployees);
      } catch (error) {
        res.status(400).json(error);
      }
      break;
    case "POST":
      try {
        const newEmployee = await Employee.create(body);
        res.status(201).json(newEmployee);
      } catch (error) {
        res.status(400).json(error);
      }
      break;
    default:
      res.status(400).json(error);
      break;
  }
};
