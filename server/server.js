import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import userRoutes from "./routes/userRoutes.js";
import employeeRoutes from "./routes/employeeRoutes.js";
import departmentRoutes from "./routes/setups/departmentRoutes.js";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/employees", employeeRoutes);
app.use("/api/departments", departmentRoutes);
// DB
mongoose
	.connect("mongodb://127.0.0.1:27017/ems")
	.then(() => console.log("MongoDB connected"))
	.catch((err) => console.log(err));

// Server
app.listen(5000, () => console.log("Server running on port 5000"));
