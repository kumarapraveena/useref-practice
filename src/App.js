import React from 'react'
import Header from './Header'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './Login'
import AddProduct from './AddProduct'
import Register from './Register'
import UpDateProduct from './UpDateProduct'

const App = () => {
  return (
    <div>
        <BrowserRouter>
        <Header/>
        <h1>Ecommerce Project</h1>
        <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/add" element={<AddProduct/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/update" element={<UpDateProduct/>}></Route>
        </Routes>
        {/* <Route path="/login" element={<Login/>}></Route>
        <Route path="/add" element={<AddProduct/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/update" element={<UpDateProduct/>}></Route> */}
        </BrowserRouter>
    </div>
  )
}

export default App