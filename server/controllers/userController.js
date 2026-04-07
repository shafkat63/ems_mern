// import User from "../models/User.js";
import User from "../models/Users.js";
// ✅ CREATE USER
export const createUser = async (req, res) => {
	try {
		const { email, password, name, role, phone } = req.body;

		// Validate required fields
		if (!email || !password || !name) {
			return res
				.status(400)
				.json({ message: "Email, password, and name are required" });
		}

		// Validate email format
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return res.status(400).json({ message: "Invalid email format" });
		}

		// Validate password length
		if (password.length < 6) {
			return res
				.status(400)
				.json({ message: "Password must be at least 6 characters" });
		}

		// Validate phone format if provided
		if (phone && !/^\d{10,}$/.test(phone.replace(/\D/g, ""))) {
			return res.status(400).json({ message: "Invalid phone number" });
		}

		// Validate role if provided
		const validRoles = ["user", "admin", "manager"];
		if (role && !validRoles.includes(role)) {
			return res.status(400).json({ message: "Invalid role" });
		}

		// Check if user already exists
		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return res.status(400).json({ message: "User already exists" });
		}

		const user = await User.create(req.body);

		const userObj = user.toObject();
		delete userObj.password;

		res.status(201).json(userObj);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

// ✅ GET ALL USERS
export const getUsers = async (req, res) => {
	try {
		const users = await User.find().sort({ createdAt: -1 });
		res.json(users);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// ✅ GET SINGLE USER
export const getUserById = async (req, res) => {
	try {
		const user = await User.findById(req.params.id);

		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}

		res.json(user);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// ✅ UPDATE USER
export const updateUser = async (req, res) => {
	try {
		const user = await User.findById(req.params.id).select("+password");

		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}

		Object.assign(user, req.body);
		await user.save(); // triggers password hash if changed

		const userObj = user.toObject();
		delete userObj.password;

		res.json(userObj);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

// ✅ DELETE USER
export const deleteUser = async (req, res) => {
	try {
		const user = await User.findByIdAndDelete(req.params.id);

		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}

		res.json({ message: "User deleted successfully" });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
