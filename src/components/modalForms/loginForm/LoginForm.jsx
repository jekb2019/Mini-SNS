import React, { useRef } from 'react';
import '../../../common/styles/modalForm.css';
import useInput from '../../../hooks/useInput';
import Button from '../../button/Button';
import Input from '../../input/Input';

const LoginForm = ({ signin, closeModal }) => {
  const [username, setUsernameByEvent, setUsernameByValue] = useInput('');
  const [password, setPasswordByEvent, setPasswordByValue] = useInput('');

  // Log in logic
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
          <Input
            onChange={setUsernameByEvent}
            value={username}
            isRequired={true}
            size="small"
            type="email"
          />
        </div>
        <div className="inputSection">
          <label className="label">Password</label>
          <Input
            onChange={setPasswordByEvent}
            value={password}
            isRequired={true}
            size="small"
            type="password"
          />
        </div>
        <div className="btnWrapper">
          <Button type="shine" size="small" label="Log in" />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
