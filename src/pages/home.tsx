import React from 'react'
import { Link } from 'react-router-dom'
import Background from '../components/background'

const Home = () => (
  <div>
    Hello Siggraph!
    <Background />
    <Link to="/about">
      About
    </Link>
  </div>
)

export default Home
