import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Users from './User'
import CreateUser from './CreateUser'
import UpdateUser from './UpdateUser'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
 
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Users/>}></Route>
          <Route path='/create' element={<CreateUser/>}></Route>
          <Route path='/update/:id' element={<UpdateUser/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
