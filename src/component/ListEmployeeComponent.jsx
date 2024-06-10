import React, { useState, useEffect } from 'react';
import { deleteEmployeeById, listEmployees } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);
  const navigator = useNavigate()

  function addNewEmployee() {
    navigator('/add-employee')
  }

  function updateEmployee(id) {
    navigator(`/update-employee/${id}`)
  }


  function deleteEmployee(id) {
    deleteEmployeeById(id).then((res) => {
      getAllEmployees();
    }).catch((err) => { console.log(err) })
  }

  function getAllEmployees() {
    listEmployees()
      .then((response) => {
        setEmployees(response.data)
      })
      .catch((error) => {
        console.error('Error fetching employees:', error);
      });
  }
  useEffect(() => {
    getAllEmployees();
  }, []);

  return (
    <>
      <h2 className='text-center'>List of Employees</h2>
      <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employee</button>
      <table className='table table-stripped table-bordered'>
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.firstName}</td>
              <td>{emp.lastName}</td>
              <td>{emp.email}</td>
              <td>
                <span><button type="button" className="btn btn-primary" onClick={() => updateEmployee(emp.id)}>Update</button></span>
                <span>         </span>
                <span><button type="button" className="btn btn-danger" onClick={() => deleteEmployee(emp.id)}>Delete</button></span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListEmployeeComponent;
