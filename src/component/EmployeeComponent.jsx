import React, { useState } from 'react'
import { createEmployee } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const EmployeeComponent = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")

  const navigator = useNavigate()

  function SaveEmployee(e) {
    e.preventDefault();
    const emp = { firstName, lastName, email }
    createEmployee(emp).then((res) => {
      navigator('/employees')
    }).catch((err) => { console.log(err) })
  }
  return (
    <div className='container'>
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h2 className="text-center">
            Add Employee
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

          <button type="button" className="btn btn-success" onClick={SaveEmployee}>SUBMIT</button>

        </div>
      </div>
    </div>
  )
}

export default EmployeeComponent