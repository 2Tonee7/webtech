const { Op } = require("sequelize");
const Employee = require("../models/employee");

const router = require("express").Router();

router
  .route("/employees")
  .get(async (req, res) => {
    const { minSalary, simplified, lastName } = req.query;
    try {
      const whereClause = {};
      
      if (minSalary) {
        whereClause.salary = { [Op.gt]: minSalary };
      }
      
      if (lastName) {
        whereClause.lastName = { [Op.like]: `%${lastName}%` };
      }
      
      const employees = await Employee.findAll({
        where: Object.keys(whereClause).length > 0 ? whereClause : undefined,
        attributes: simplified ? { exclude: 'id' } : undefined
      });
      return res.status(200).json(employees);
    } catch (err) {
      return res.status(500).json(err);
    }
  })
  .post(async (req, res) => {
  
    try {
      const newEmployee = await Employee.create(req.body);
      return res.status(200).json(newEmployee);
    } catch (err) {
      return res.status(500).json(err);
    }
  });
 
router
  .route("/employees/:id")
  .get(async (req, res) => {
    const employee = await Employee.findOne({
      where: { id: req.params.id },
    });
    if (employee) {
      return res.status(200).json(employee);
    } else {
      return res
        .status(404)
        .json({ error: `Employee with id ${req.params.id} does not exists` });
    }
  })
  .put(async (req, res) => {
    const employee = await Employee.findByPk(req.params.id);
      if (employee) {
        return res.status(200).json(await employee.update(req.body));
    } else {
      return res
        .status(404)
        .json({ error: `Employee with id ${req.params.id} does not exists` });
    }
  });

module.exports = router;
