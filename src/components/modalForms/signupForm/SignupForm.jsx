import React from 'react';
import '../../../common/styles/modalForm.css';
import useInput from '../../../hooks/useInput';
import Button from '../../button/Button';
import Input from '../../input/Input';
const SignupForm = ({ signup, closeModal }) => {
  const [username, setUsernameByEvent, setUsernameByValue] = useInput('');
  const [email, setEmailByEvent, setEmailByValue] = useInput('');
  const [password, setPasswordByEvent, setPasswordByValue] = useInput('');

  // Sign up logic
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
          <Input
            onChange={setUsernameByEvent}
            value={username}
            isRequired={true}
            size="small"
            type="text"
          />
        </div>
        <div className="inputSection">
          <label className="label">Email</label>
          <Input
            onChange={setEmailByEvent}
            value={email}
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
          <Button type="shine" size="small" label="Sign up" />
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
