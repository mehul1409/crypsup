import { useNavigate, Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react';

import axios from 'axios';

const Supporterdashboard = () => {

  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get('http://localhost:3000/username/getallproject');
      setProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

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
    <div className='userdashboard'>
      <button onClick={handlelogout} className='logoutbutton'>logout</button>
      <div className='userproject'>
          {projects.map(project => (
            <div key={project._id} className='projectbox'>
              <div className='projecttitle'>{project.title}</div>
              <div className='projectbody'>{project.body}</div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Supporterdashboard
