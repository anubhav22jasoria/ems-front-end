import axios from "axios";
const REST_API_BASE_URL = 'http://localhost:8080/api/employees';
export const listEmployees = () => axios.get(REST_API_BASE_URL)
export const createEmployee = (emp) => axios.post(REST_API_BASE_URL, emp)
export const getEmployeeById = (id) => axios.get(REST_API_BASE_URL + '/' + id)
export const updateEmployeeById = (id, emp) => axios.put(REST_API_BASE_URL + '/' + id, emp)
export const deleteEmployeeById = (id) => axios.delete(REST_API_BASE_URL + '/' + id)