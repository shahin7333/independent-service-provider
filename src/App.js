import { Route, Routes } from 'react-router-dom'
import './App.css'
import Error from './Component/Error/Error'
import HiringInfo from './Pages/HiringInfo/HiringInfo'
import Banner from './Pages/Home/Banner/Banner'
import Discount from './Pages/Home/Discount/Discount'


import Footer from './Pages/Home/Footer/Footer'
import Header from './Pages/Home/Header/Header'
import Home from './Pages/Home/Home/Home'
import Services from './Pages/Home/Services/Services'
import Login from './Pages/Login/Login/Login'
import Register from './Pages/Register/Register/Register'

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path='/discount' element={<Discount></Discount>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/services/:hiringTopic" element={<HiringInfo></HiringInfo>}></Route>
        <Route path="*" element={<Error></Error>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
