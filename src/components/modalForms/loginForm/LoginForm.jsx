import React from 'react';
import '../../../common/styles/modalForm.css';
import useInput from '../../../util/useInput';

const LoginForm = (props) => {
  const [username, setUsernameByEvent, setUsernameByValue] = useInput('');
  const [password, setPasswordByEvent, setPasswordByValue] = useInput('');

  return (
    <div>
      <form className="form">
        <h1 className="title">Log In</h1>
        <div className="inputSection">
          <label className="label">Username</label>
          <input
            value={username}
            type="text"
            id="username"
            className="input"
            onChange={setUsernameByEvent}
            required
          />
        </div>
        <div className="inputSection">
          <label className="label">Password</label>
          <input
            value={password}
            type="password"
            id="password"
            className="input"
            onChange={setPasswordByEvent}
            required
          />
        </div>
        <button className="button">Go</button>
      </form>
    </div>
  );
};

export default LoginForm;
