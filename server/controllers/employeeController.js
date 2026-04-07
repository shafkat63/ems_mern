const Employee = require('../models/Employee');

// Create
exports.createEmployee = async (req, res) => {
  try {
    const emp = new Employee(req.body);
    await emp.save();
    res.status(201).json(emp);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all
exports.getEmployees = async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
};

// Update
exports.updateEmployee = async (req, res) => {
  const emp = await Employee.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(emp);
};

// Delete
exports.deleteEmployee = async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted successfully' });
};