import React from 'react'
import './Homepage.css'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (

    <div className="container">
      <div className="center-content">
        <img src="icon.png" alt="CrypSup Icon" className="icon" />
        <h1 className="project-name">CrypSup</h1>
        <p className="description">A place where you get what you deserve</p>
        <div className="buttons">
          <Link to='/signup' className="button">Register as a Creator</Link>
          <a href="#" className="button">Register as a Supporter</a>
        </div>
      </div>
    </div>

  )
}

export default Homepage
