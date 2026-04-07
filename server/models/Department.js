import mongoose from "mongoose";

const departmentSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			unique: true,
			trim: true,
		},
		description: {
			type: String,
			default: "",
		},
		status: {
			type: String,
			default: "A",
			enum: ["A", "I"],
		},
		create_by: {
			type: String,
			required: true,
		},
		create_date: {
			type: Date,
			default: Date.now,
		},
		update_by: {
			type: String,
			default: null,
		},
		update_date: {
			type: Date,
			default: null,
		},
	},
	{ timestamps: true },
);

const Department = mongoose.model("Department", departmentSchema);

export default Department;
