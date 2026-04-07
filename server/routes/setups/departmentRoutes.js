import { Router } from "express";
import {
  createDepartment,
  getDepartments,
  updateDepartment,
  deleteDepartment,
} from "../../controllers/setups/departmentController.js";

const router = Router();

router.post("/", createDepartment);
router.get("/", getDepartments);
router.put("/:id", updateDepartment);
router.delete("/:id", deleteDepartment);

export default router;