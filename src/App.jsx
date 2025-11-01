import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Table from './components/table'
import Footer from './components/Footer'
import About from './pages/About'
import Features from './pages/Features'
import Pricing from './pages/Pricing'
import Login from './pages/Login'
import Register from './pages/Register'
import StartSelling from './pages/StartSelling'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Table />
              <Footer />
            </>
          } />
          <Route path="/about" element={<About/>} />
          <Route path="/features" element={<Features/>} />
          <Route path="/pricing" element={<Pricing/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/start-selling" element={<StartSelling/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
