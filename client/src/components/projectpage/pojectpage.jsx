import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import './projectpage.css';

const ProjectDetails = () => {
  const { projectId } = useParams();
  const [projectDetails, setProjectDetails] = useState(null);
  const [comment, setcomment] = useState('');

  const navigate = useNavigate();

  const handlesubmit = (e) =>{
    e.preventDefault();

    Axios.post('http://localhost:3000/comment/',{
        comment,
        projectId,
    }).then(response =>{
        if(response.data.status){
        navigate('/supporterdashboard')
        }
    }).catch(err=>{
        console.log(err);
    })
}

  useEffect(() => {
    fetchProjectDetails();
  }, [projectId]);

  const fetchProjectDetails = async () => {
    try {
      const response = await Axios.get(`http://localhost:3000/username/${projectId}`);
      setProjectDetails(response.data);
    } catch (error) {
      console.error('Error fetching project details:', error);
    }
  };

  if (!projectDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className='project-details'>
      <h2>{projectDetails.title}</h2>
      <p>{projectDetails.body}</p>
      <div className="comment">
        <form onSubmit={handlesubmit}>
        <input type="text" placeholder='write your comment here!' onChange={(e)=> setcomment(e.target.value)}/>
         <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default ProjectDetails;
