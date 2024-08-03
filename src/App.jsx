

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
import OrderNow from './Pages/Order-Now/OrderNow'
import OurMenu from './Pages/Our-Menu/OurMenu'


function App() {


  return (
    <>
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='store-locator' element={<StoreLocator/>} />
    <Route path='/our-menu' element={<OurMenu/>} />
    <Route path='order-now' element={<OrderNow/>} />
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
