import React, { useState } from 'react';
import './Login.css';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { auth } from "./firebase";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
    e.preventDefault();

    auth 
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
      navigate("/")
      })
      .catch(error => alert(error.message))
  }

  const register = e => {
    e.preventDefault();
    // Create new user with email and password.
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }

      })
      .catch(error => alert(error.message))
  }


  return (
    <div className='login'>
      <Link to="/">
        <img className='login__logo' src='Amazon-logo-for-login.jpg' alt='' />
      </Link>
      <div className='login__container'>
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
          <h5>Password</h5>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
          <button onClick={signIn} type='submit' className='login__signInButton'>Sign in</button>
        </form>
        <p>
          By Signing-in you agree to Amazon's Fake Clone Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
        </p>
        <button onClick={register} className='login__registerButton'>Create your Amazon account</button>
      </div>
    </div>
  );
}

export default Login;
