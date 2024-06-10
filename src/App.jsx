
import './App.css'
import EMSFooter from './component/EMSFooter';
import EMSHeader from './component/EMSHeader';
import EmployeeComponent from './component/EmployeeComponent';
import ListEmployeeComponent from './component/ListEmployeeComponent';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import UpdateEmployeeComponent from './component/UpdateEmployeeComponent';
function App() {
  return (
    <>
      <BrowserRouter>
        <EMSHeader />
        <Routes>
          <Route path='/' element={<ListEmployeeComponent />}></Route>
          <Route path='/employees' element={<ListEmployeeComponent />}></Route>
          <Route path='/add-employee' element={<EmployeeComponent />}></Route>
          <Route path='/update-employee/:id' element={<UpdateEmployeeComponent />}></Route>

        </Routes>
        <EMSFooter />
      </BrowserRouter>
    </>
  )
}

export default App;