import React, { useRef } from 'react';
import '../../../common/styles/modalForm.css';
import useInput from '../../../util/useInput';

const LoginForm = ({ signin, closeModal }) => {
  const [username, setUsernameByEvent, setUsernameByValue] = useInput('');
  const [password, setPasswordByEvent, setPasswordByValue] = useInput('');

  const handleSubmit = (e) => {
    e.preventDefault();
    signin(username, password)
      .then(() => {
        closeModal();
      })
      .catch((e) => {
        setPasswordByValue('');
        alert('Failed to Log In. Please try again.');
      });
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
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
