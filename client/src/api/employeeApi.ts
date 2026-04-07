import axios from 'axios';
import { type Employee } from '../types/employee';

const API = axios.create({
  baseURL: '/api/employees'
});

// GET
export const getEmployees = async (): Promise<Employee[]> => {
  const res = await API.get<Employee[]>('/');
  return res.data;
};

// CREATE
export const createEmployee = async (data: Employee): Promise<Employee> => {
  const res = await API.post<Employee>('/', data);
  return res.data;
};

// DELETE
export const deleteEmployee = async (id: string): Promise<void> => {
  await API.delete(`/${id}`);
};

// UPDATE
export const updateEmployee = async (
  id: string,
  data: Partial<Employee>
): Promise<Employee> => {
  const res = await API.put<Employee>(`/${id}`, data);
  return res.data;
};