import React, { useState } from 'react';
import FormView from './FormView';
import { useDispatch } from 'react-redux';
import { addUser } from './action';

interface IProps {}

function FormContainer(props: IProps) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (firstName === '') {
      return;
    }
    if (lastName === '') {
      return;
    }
    if (username === '') {
      return;
    }
    if (email === '') {
      return;
    }
    if (password === '') {
      return;
    }

    dispatch(addUser({ firstName, lastName, password, email, username }));
  };

  return (
    <FormView
      setFirstName={setFirstName}
      setLastName={setLastName}
      setUserName={setUserName}
      setEmail={setEmail}
      setPassword={setPassword}
      onSubmit={onSubmit}
    />
  );
}
export default FormContainer;
