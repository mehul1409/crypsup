import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './supporterdashboard.css'

const supporterdashboard = () => {

  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const handlelogout = () => {
    axios.get('http://localhost:3000/auth/logout')
      .then(res => {
        if (res.data.status) {
          navigate('/')
        }
      }).catch(err => {
        console.log(err);
      })
  }

  return (
    <>
      <div className="homesection">
        <section className="header">
          <div className='logo'>
            <img src="/assets/crypsup.png" alt="" />
            <div className='headerheading'>CRYPSUP</div>
          </div>
          <div>
            <Link to='/supporterdashboard'>Home</Link>
          </div>
          <div>
            <Link to='/explorepage'>Explore</Link>
          </div>
          <div>
            <a href='#about'>About</a>
          </div>
          <div>
            <button onClick={handlelogout} className='logoutbuttonsupporter'>LOGOUT</button>
          </div>
        </section>  
      </div>
    </>
  )
}

export default supporterdashboard
