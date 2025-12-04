import './App.css'
import Login from './Pages/Login/Login.jsx'
import React from 'react'  
import Registration from './Pages/Registration/Registration.jsx'
import Home from './Pages/Home/Home.jsx'
import Category from './Pages/CategoryBlogs/Category.jsx'
import DedicatedBlog from './Pages/DedicatedBlogs/DedicatedBlog.jsx'
import Navbar from './Components/NavBar/NavBar.jsx'
import Banner from './Components/Banner/Banner.jsx'
import Footer from './Components/Footer/Footer.jsx'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'


function App() {

  return (
   
   <>
     <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Registration' element={<Registration/>}/>
        <Route path='/Blogs/:category' element={<Category/>}/>
        <Route path='/Blog/:id' element={<DedicatedBlog/>}/>
      </Routes>
     <Footer/>
    </>
  )
}

export default App
