import React, { useContext } from 'react';
import '../../../common/styles/modalForm.css';
import { ModalContext } from '../../../context/ModalContext';
import useInput from '../../../hooks/useInput';
import Button from '../../button/Button';
import Input from '../../input/Input';
import submitForm from '../../../util/submitForm';

const SignupForm = ({ signup, verifyUser }) => {
  const { closeModal } = useContext(ModalContext);

  const [username, setUsernameByEvent] = useInput('');
  const [email, setEmailByEvent] = useInput('');
  const [password, setPasswordByEvent, setPasswordByValue] = useInput('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // validations
    try {
      await submitForm(signup, username, email, password);
    } catch (error) {
      if (error.code === 'InvalidPasswordException') {
        alert('Password must be at least 8 characters.');
        setPasswordByValue('');
        return;
      }
      alert(error.message);
      setPasswordByValue('');
      return;
    }

    // user verification
    const code = prompt('Enter verification code (Sent to your email)');
    try {
      await verifyUser(username, code);
    } catch (error) {
      alert(error.message);
      return;
    }
    alert('Successfully signed up! Welcome to MINI SNS!');
    closeModal();
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="title">Sign Up</h1>
        <div className="inputSection">
          <label className="label" htmlFor="signupUsernameInput">
            Username
          </label>
          <Input
            onChange={setUsernameByEvent}
            value={username}
            isRequired={true}
            size="small"
            inputId="signupUsernameInput"
          />
        </div>
        <div className="inputSection">
          <label className="label" htmlFor="signupEmailInput">
            Email
          </label>
          <Input
            onChange={setEmailByEvent}
            value={email}
            isRequired={true}
            size="small"
            type="email"
            inputId="signupEmailInput"
          />
        </div>
        <div className="inputSection">
          <label className="label" htmlFor="signupPasswordInput">
            Password
          </label>
          <Input
            onChange={setPasswordByEvent}
            value={password}
            isRequired={true}
            size="small"
            type="password"
            inputId="signupPasswordInput"
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
