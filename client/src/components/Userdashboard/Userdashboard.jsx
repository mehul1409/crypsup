import { useNavigate, Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react';

import axios from 'axios';

const Userdashboard = () => {

  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get('http://localhost:3000/username/');
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
    <div>
      <button onClick={handlelogout}>logout</button>
      <Link to='/userdashboard/addproject'>
        <div>Add project</div>
      </Link>
      <div>
        <ul>
          {projects.map(project => (
            <div key={project._id}>
              <div>{project.title}</div>
              <div>{project.body}</div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Userdashboard
