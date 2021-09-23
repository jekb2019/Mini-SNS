import React, { useContext, useEffect, useRef } from 'react';
import '../../../common/styles/modalForm.css';
import { ModalContext } from '../../../context/ModalContext';
import useInput from '../../../hooks/useInput';
import Button from '../../button/Button';
import Input from '../../input/Input';
import submitForm from '../../../util/submitForm';

const LoginForm = ({ signin }) => {
  const { closeModal } = useContext(ModalContext);

  const [username, setUsernameByEvent] = useInput('');
  const [password, setPasswordByEvent, setPasswordByValue] = useInput('');

  const usernameInputRef = useRef();

  useEffect(() => {
    usernameInputRef.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitForm(signin, username, password);
      closeModal();
    } catch (error) {
      alert(error.message);
      setPasswordByValue('');
    }
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="title">Log In</h1>
        <div className="inputSection">
          <label className="label" htmlFor="loginUsernameInput">
            Username
          </label>
          <Input
            onChange={setUsernameByEvent}
            value={username}
            isRequired={true}
            size="small"
            inputId="loginUsernameInput"
            inputRef={usernameInputRef}
          />
        </div>
        <div className="inputSection">
          <label className="label" htmlFor="loginPasswordInput">
            Password
          </label>
          <Input
            onChange={setPasswordByEvent}
            value={password}
            isRequired={true}
            size="small"
            type="password"
            inputId="loginPasswordInput"
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
