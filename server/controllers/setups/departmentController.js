import Department from "../../models/Department.js";

/* CREATE */
export const createDepartment = async (req, res) => {
  try {
    const { name, description, create_by, status } = req.body;

    if (!name || !create_by) {
      return res
        .status(400)
        .json({ message: "Name and create_by are required" });
    }

    const existing = await Department.findOne({ name });
    if (existing) {
      return res.status(400).json({ message: "Department already exists" });
    }

    const department = await Department.create({
      name,
      description,
      status: status || "A",
      create_by,
      create_date: new Date(),
    });

    res.status(201).json(department);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* GET ALL */
export const getDepartments = async (req, res) => {
  try {
    const departments = await Department.find().sort({ createdAt: -1 });
    res.json(departments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* GET ONE */
export const getDepartmentById = async (req, res) => {
  try {
    const { id } = req.params;

    const department = await Department.findById(id);

    if (!department) {
      return res.status(404).json({ message: "Department not found" });
    }

    res.json(department);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* UPDATE */
export const updateDepartment = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, status, update_by } = req.body;

    const department = await Department.findById(id);

    if (!department) {
      return res.status(404).json({ message: "Department not found" });
    }

    // Prevent duplicate name
    if (name && name !== department.name) {
      const existing = await Department.findOne({ name });
      if (existing) {
        return res.status(400).json({ message: "Department name already exists" });
      }
      department.name = name;
    }

    if (description !== undefined) department.description = description;
    if (status) department.status = status;

    department.update_by = update_by || "system";
    department.update_date = new Date();

    const updated = await department.save();

    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* DELETE */
export const deleteDepartment = async (req, res) => {
  try {
    const { id } = req.params;

    const department = await Department.findById(id);

    if (!department) {
      return res.status(404).json({ message: "Department not found" });
    }

    await department.deleteOne();

    res.json({ message: "Department deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};