import React, { useContext } from 'react';
import '../../../common/styles/modalForm.css';
import { ModalContext } from '../../../context/ModalContext';
import useInput from '../../../hooks/useInput';
import Button from '../../button/Button';
import Input from '../../input/Input';
import submitForm from './submitLogic';

const LoginForm = ({ signin }) => {
  const { closeModal } = useContext(ModalContext);

  const [username, setUsernameByEvent] = useInput('');
  const [password, setPasswordByEvent, setPasswordByValue] = useInput('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isSuccessful = await submitForm(signin, username, password);
    if (isSuccessful) {
      closeModal();
    } else {
      alert('Failed to Log In. Please try again.');
      setPasswordByValue('');
    }
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
