

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Header from './components/header/Header'
import About from './Pages/About'
import Footer from './Pages/Footer'
import Menu from './Pages/Menu'
import Locations from './Pages/Locations'
import Blog from './Pages/Blog'

function App() {


  return (
    <>
   <BrowserRouter>
   <Header/>
   <Routes>

    <Route path='/' element={<Home/>} />
    <Route path='Menu' element={<Menu/>} />
    <Route path='Locations' element={<Locations/>} />
    <Route path='About' element={<About/>} />
    <Route path='Blog' element={<Blog/>} />
   </Routes>
   <Footer/>
   </BrowserRouter>
    </>
  )
}

export default App
