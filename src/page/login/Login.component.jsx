import React, { useState } from 'react'
import './Login.style.css';
import { Link } from 'react-router-dom';

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = (event) => {
        event.preventDefault();
    }

    return (
        <div className='login'>
            {/* Background Section */}
            <div className="login__bg"></div>
            {/* Title Section */}
            <div className="login__content">
                <h1 className="title--xl text-center">Login</h1>
                <h2 className="title--sm text-center">welcome back</h2>
            </div>
            {/* Login Form */}
            <div className="container mt-50">
                <form className="login__form">
                    <label htmlFor="email">Email address</label>
                    <input type="email" name="email" id="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
                    <button type='submit' onClick={signIn}>sign in</button>
                    <div className="login__help">
                        <p>Have you forgotten your password?</p>
                        <p><a href="/">forgot your password?</a></p>
                        <p className='mt-10'>New to Route One?</p>
                        <p><Link to="/register">create account</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
