

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/home/Home'
import Header from './components/header/Header'
import About from './Pages/About'
import Menu from './Pages/Menu'
import Locations from './Pages/Locations'
import Blog from './Pages/Blog'
import StoreLocator from './Pages/Store-locator/StoreLocator'
import Footer from './components/Footer/Footer'


function App() {


  return (
    <>
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='store-locator' element={<StoreLocator/>} />
    <Route path='Menu' element={<Menu/>} />
    <Route path='Locations' element={<Locations/>} />
    <Route path='About' element={<About/>} />
    <Route path='Blog' element={<Blog/>} />
   </Routes>
   <Footer></Footer>
   </BrowserRouter>
    </>
  )
}

export default App
