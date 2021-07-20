import React from 'react'
import './Login.style.css';

function Login() {
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
                <form action="/" className="login__form">
                    <label htmlFor="email">Email address</label>
                    <input type="email" name="email" id="email" placeholder='Email' />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder='Password' />
                    <button type='submit'>sign in</button>
                    <div className="login__help">
                        <p>Have you forgotten your password?</p>
                        <p><a href="/">forgot your password?</a></p>
                        <p className='mt-10'>New to Route One?</p>
                        <p><a href="/">create account</a></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
