import React from 'react';
import '../../../common/styles/modalForm.css';
import useInput from '../../../util/useInput';
const SignupForm = (props) => {
  const [username, setUsernameByEvent, setUsernameByValue] = useInput('');
  const [email, setEmailByEvent, setEmailByValue] = useInput('');
  const [password, setPasswordByEvent, setPasswordByValue] = useInput('');

  return (
    <div>
      <form className="form">
        <h1 className="title">Sign Up</h1>
        <div className="inputSection">
          <label className="label">Username</label>
          <input
            value={username}
            onChange={setUsernameByEvent}
            type="text"
            id="username"
            className="input"
            required
          />
        </div>
        <div className="inputSection">
          <label className="label">Email</label>
          <input
            value={email}
            onChange={setEmailByEvent}
            type="email"
            id="email"
            className="input"
            required
          />
        </div>
        <div className="inputSection">
          <label className="label">Password</label>
          <input
            value={password}
            onChange={setPasswordByEvent}
            type="password"
            id="password"
            className="input"
            required
          />
        </div>
        <button className="button">Go</button>
      </form>
    </div>
  );
};

export default SignupForm;
