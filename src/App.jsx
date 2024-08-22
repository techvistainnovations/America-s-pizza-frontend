

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
import { IoChatboxEllipsesSharp } from 'react-icons/io5'
import { useState } from 'react'


function App() {
  console.log("CODE UPLOADED ON 22-08-2024")
  const [isChatBoxShow, updateChatBox] = useState(false)

  const showHideChatBox = ()=>{
    if(isChatBoxShow)
    updateChatBox(false)
    else
    updateChatBox(true)
  }

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
    <div className='fixed  flex justify-center items-center md:bottom-[40px] sm:bottom-[20px] bottom-[20px] z-50 md:right-[40px] sm:right-[20px] right-[20px]'>
      {
        isChatBoxShow && 
        <div className='w-60 md:h-96 h-80 z-50 flex justify-center items-center bg-whiteColor absolute right-12 rounded-md drop-shadow-md bottom-12'>
          chat or enquiry
        </div>
      }
      <button onClick={showHideChatBox} className='text-3xl rounded-full drop-shadow text-themeColor bg-whiteColor w-[50px] h-[50px] flex justify-center items-center'>
      <div className='w-[40px] h-[40px] rounded-full animate-ping absolute bg-whiteColor opacity-50'></div>
        <IoChatboxEllipsesSharp className='relative z-20' />
      </button>
    </div>
    </>
  )
}

export default App
