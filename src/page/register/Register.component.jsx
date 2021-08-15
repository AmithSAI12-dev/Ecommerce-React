import React from 'react'
import { useForm } from 'react-hook-form';
import { auth, db } from '../../firebase';
import './Register.style.css';
import { Link } from 'react-router-dom';


function Register() {

    const {register, handleSubmit, formState: {errors}} = useForm();

    const registration = (data) => {
        auth.createUserWithEmailAndPassword(data.email, data.password)
            .then(user => {
                return db.ref('user/' + user.user.uid).set({
                    email: data.email,
                    password: data.password,
                    firstname: data.firstName,
                    lastname: data.lastName
                })
            })
            .catch(error => console.log(error.message));
    }

    return (
        <div className='register'>
            {/* Background Section */}
            <div className="register__bg"></div>
            {/* Title Section */}
            <div className="register__content">
                <h1 className="title--xl text-center">Create Account</h1>
                <h2 className="title--sm text-center">Become part of the family</h2>
            </div>
            {/* register Form */}
            <div className="container mt-50">
                
                <form className="register__form" onSubmit={handleSubmit(registration)}>
                    {errors.password && <p className='text-center error'>{errors.password.message}</p>}
                    {errors.email && <p className='text-center error'>{errors.email.message}</p>}
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" name="firstname" id="firstname" placeholder='Enter your first name here' 
                        {...register('firstName')}
                    />
                    <label htmlFor="lastname">Last Name</label>
                    <input type="text" name="lastname" id="lastname" placeholder='Enter your last name here' 
                        {...register('lastName')}
                    />
                    <label htmlFor="email">Email address</label>
                    <input type="email" name="email" id="email" placeholder='Email'  
                        {...register('email', {required: "Eamil can't be blank"})}
                    />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder='Password' 
                        {...register('password', {required: "Password can't be blank"})}
                    />
                    <button type='submit'>sign in</button>
                    <div className="register__help">
                        <p>Already have an account with us? <Link to='/login'>Login Here</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default Register
