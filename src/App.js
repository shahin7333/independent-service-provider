import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Pages/Home/Footer/Footer'
import Header from './Pages/Home/Header/Header'
import Home from './Pages/Home/Home/Home'
import Services from './Pages/Home/Services/Services'

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
