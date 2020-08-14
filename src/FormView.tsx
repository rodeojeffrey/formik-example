import React from 'react';
import styled from 'styled-components';

interface IProps {
  className?: string;
  setFirstName: (i: string) => void;
  setLastName: (i: string) => void;
  setUserName: (i: string) => void;
  setEmail: (i: string) => void;
  setPassword: (i: string) => void;
  onSubmit: (e: React.FormEvent<HTMLButtonElement>) => void;
}

function FormViewBase(props: IProps) {
  const {
    className,
    setEmail,
    setFirstName,
    setLastName,
    setPassword,
    setUserName,
    onSubmit
  } = props;
  return (
    <div className={`${className}__form-container`}>
      <form>
        <div className={`${className}__form-controls`}>
          <label>First Name</label>
          <input
            type="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFirstName(e.target.value)
            }
          />
        </div>
        <div className={`${className}__form-controls`}>
          <label>Last Name</label>
          <input
            type="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setLastName(e.target.value)
            }
          />
        </div>
        <div className={`${className}__form-controls`}>
          <label>Email</label>
          <input
            type="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
        </div>
        <div className={`${className}__form-controls`}>
          <label>Username</label>
          <input
            type="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUserName(e.target.value)
            }
          />
        </div>
        <div className={`${className}__form-controls`}>
          <label>Password</label>
          <input
            type="password"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
        </div>
        <button onClick={onSubmit}>Submit</button>
      </form>
    </div>
  );
}

const FormView = styled(FormViewBase)`
  &__form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;

    form {
      display: flex;
      flex-direction: column;
      width: 300px;

      button {
        margin: 10px auto;
        width: 70%;
        padding: 10px;
      }
    }
  }

  &__form-controls {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    align-items: center;

    input {
      padding: 10px;
    }
  }
`;

export default FormView;
