import React from 'react'
import './App.css'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import TempleHistory from './components/TempleHistory'
import Prashad from './pages/Prashad'
import Mala from './pages/Mala'
import Poshak from './pages/Poshak'
import Pratima from './pages/Pratima'
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path="/about" element={<TempleHistory />} />
        <Route path='/product/prashad' element={<Prashad/>}/>
        <Route path='/product/mala' element={<Mala/>}/>
        <Route path='/product/poshak' element={<Poshak/>}/>
        <Route path='/product/pratima' element={<Pratima/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App