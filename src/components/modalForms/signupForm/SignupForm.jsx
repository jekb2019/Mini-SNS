import React from 'react';
import '../../../common/styles/modalForm.css';
import useInput from '../../../hooks/useInput';
const SignupForm = ({ signup, closeModal }) => {
  const [username, setUsernameByEvent, setUsernameByValue] = useInput('');
  const [email, setEmailByEvent, setEmailByValue] = useInput('');
  const [password, setPasswordByEvent, setPasswordByValue] = useInput('');

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(username, email, password)
      .then(() => {
        closeModal();
      })
      .catch(() => {
        setPasswordByValue('');
        alert(
          'Problem signing up: user already exists or password less than 8 characters.'
        );
      });
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
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
