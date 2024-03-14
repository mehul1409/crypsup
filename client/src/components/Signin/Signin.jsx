import React, { useState } from 'react'
import Axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Signin = () => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const navigate = useNavigate();

    Axios.defaults.withCredentials = true;

    const handlesubmit = (e) => {
        e.preventDefault();

        Axios.post('http://localhost:3000/auth/login', {
            email,
            password,
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
            <h2>Login</h2>
            <form className='sign-up-form' onSubmit={handlesubmit}>

                <label htmlFor="email">Email:</label>
                <input type="email" placeholder='email' onChange={(e) => setemail(e.target.value)} />

                <label htmlFor="password">Password:</label>
                <input type="password" placeholder='password' onChange={(e) => setpassword(e.target.value)} />

                <button type='submit'>signup</button>

                <Link to='/forgotpassword'>Forgot password</Link>
                <p>Don't Have an account? <Link to='/signup'>signup</Link></p>

            </form>
        </div>
    )
}

export default Signin;
