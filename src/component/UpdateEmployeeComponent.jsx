import React, { useEffect, useState } from 'react'
import { createEmployee, getEmployeeById, updateEmployeeById } from '../services/EmployeeService'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateEmployeeComponent = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")

  const { id } = useParams()

  useEffect(() => {
    if (id) {
      getEmployeeById(id).then((res) => {
        setFirstName(res.data.firstName)
        setLastName(res.data.lastName)
        setEmail(res.data.email)
      }).catch((err) => {
        console.log(err)
      })
    }
    else {
    }
  }, [id])


  const navigator = useNavigate()

  function updateEmployee(e) {
    e.preventDefault();
    const emp = { firstName, lastName, email }
    updateEmployeeById(id, emp).then((res) => {
      navigator('/employees')
    }).catch((err) => { console.log(err) })
  }
  return (
    <div className='container'>
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h2 className="text-center">
            Update Employee
          </h2>
          <div className="card-body">
            <form>
              <div className="form-group mb-3">
                <label className="form-label">First Name : </label>
                <input
                  type="text"
                  placeholder='Enter Employee First Name'
                  name='firstName'
                  value={firstName}
                  className='form-control'
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
            </form>
          </div>

          <div className="card-body">
            <form>
              <div className="form-group mb-3">
                <label className="form-label">Last Name : </label>
                <input
                  type="text"
                  placeholder='Enter Employee Last Name'
                  name='lastName'
                  value={lastName}
                  className='form-control'
                  onChange={(e) => setLastName(e.target.value)}
                />

              </div>
            </form>
          </div>

          <div className="card-body">
            <form>
              <div className="form-group mb-3">
                <label className="form-label">Email : </label>
                <input
                  type="text"
                  placeholder='Enter Employee Email'
                  name='email'
                  value={email}
                  className='form-control'
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </form>
          </div>

          <button type="button" className="btn btn-success" onClick={updateEmployee}>UPDATE</button>

        </div>
      </div>
    </div>
  )
}

export default UpdateEmployeeComponent