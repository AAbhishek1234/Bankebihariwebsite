import React from 'react'
import './App.css'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import TempleHistory from './components/TempleHistory'
import Prashad from './pages/Prashad'
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path="/about" element={<TempleHistory />} />
        <Route path='/product/prashad' element={<Prashad/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App