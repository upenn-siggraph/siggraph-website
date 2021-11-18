import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <div>
    Hello Siggraph!
    <Link to="/about">
      About
    </Link>
  </div>
)

export default Home
