import React from 'react';
import '../../../common/styles/modalForm.css';

const LoginForm = (props) => (
  <div>
    <form className="form">
      <h1 className="title">Log In</h1>
      <div className="inputSection">
        <label className="label">Username</label>
        <input type="text" id="username" className="input" required />
      </div>
      <div className="inputSection">
        <label className="label">Password</label>
        <input type="text" id="password" className="input" required />
      </div>
      <button className="button">Go</button>
    </form>
  </div>
);

export default LoginForm;
