import { useEffect, useState } from "react";
import {
	getEmployees,
	createEmployee,
	deleteEmployee,
} from "./api/employeeApi";

import type { Employee } from "./types/employee";

function App() {
	const [employees, setEmployees] = useState<Employee[]>([]);
	const [form, setForm] = useState<Employee>({
		name: "",
		email: "",
	});

	const loadEmployees = async () => {
		const data = await getEmployees();
		setEmployees(data);
	};

	useEffect(() => {
		const fetchEmployees = async () => {
			const data = await getEmployees();
			setEmployees(data);
		};

		fetchEmployees();
	}, []);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		await createEmployee(form);
		setForm({ name: "", email: "" });
		loadEmployees();
	};

	const handleDelete = async (id?: string) => {
		if (!id) return;
		await deleteEmployee(id);
		loadEmployees();
	};

	return (
		<div style={{ padding: "20px" }}>
			<h1>Employee Management System</h1>

			<form onSubmit={handleSubmit}>
				<input
					placeholder="Name"
					value={form.name}
					onChange={(e) => setForm({ ...form, name: e.target.value })}
				/>
				<input
					placeholder="Email"
					value={form.email}
					onChange={(e) => setForm({ ...form, email: e.target.value })}
				/>
				<button type="submit">Add</button>
			</form>

			<ul>
				{employees.map((emp) => (
					<li key={emp._id}>
						{emp.name} - {emp.email}
						<button onClick={() => handleDelete(emp._id)}>Delete</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default App;
