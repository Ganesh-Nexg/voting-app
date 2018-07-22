import React from 'react';
import facebookBtn from '../assets/facebook-btn.png';
import googleBtn from '../assets/google-btn.png';

const Login = () => {
  return (
    <div className="Login">
      <h3>Login</h3>
      <form action="#" className="Login__form">
        <div>
          <label for="email" className="Login__form--label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="Login__form--input"
            placeholder="Email"
          />
        </div>
        <div>
          <label for="password" className="Login__form--label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            className="Login__form--input"
            placeholder="Password"
          />
        </div>
      </form>
      <p className="Login__or">or</p>
      <div className="login-item">
        <a href="/auth/facebook">
          <img src={facebookBtn} width="200" alt="login with facebook" />
        </a>
      </div>
      <div className="login-item">
        <a href="/auth/google">
          <img src={googleBtn} width="200" alt="login with google" />
        </a>
      </div>
    </div>
  );
};

export default Login;
