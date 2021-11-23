import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import About from './pages/about'
import Home from './pages/home'
import Container from './components/container'

const App = () => (
  <Router>
    <Container>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </Container>
  </Router>
)

export default App
