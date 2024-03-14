import React, { useState } from 'react'
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateProject = () => {
    const [title, settitle] = useState('');
    const [body, setbody] = useState('');

    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();

        Axios.post('http://localhost:3000/username/addproject', {
            title,
            body,
        }).then(response => {
            if (response.data.status) {
                navigate('/userdashboard')
            }
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <div className='sign-up-container'>
            <h2>Add project</h2>
            <form className='sign-up-form' onSubmit={handlesubmit}>
                <label htmlFor="title">title:</label>
                <input type="text" placeholder='title' onChange={(e) => settitle(e.target.value)} />

                <label htmlFor="body">body:</label>
                <input type="text" placeholder='body' onChange={(e) => setbody(e.target.value)} />

                <button type='submit'>AddProject</button>
            </form>
        </div>
    )
}

export default CreateProject
