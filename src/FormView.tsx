import React from 'react';
import styled from 'styled-components';
import { FormikProps } from 'formik';
import { IUser } from './action';

interface IProps {
  className?: string;
  formik: FormikProps<IUser>;
}

function FormViewBase(props: IProps) {
  const { className, formik } = props;
  console.log(formik.errors);
  return (
    <div className={`${className}__form-container`}>
      <form onSubmit={formik.handleSubmit}>
        <div className={`${className}__form-controls`}>
          <label>First Name</label>
          <input type="text" {...formik.getFieldProps('firstName')} />
        </div>
        <div className={`${className}__form-controls`}>
          <label>Last Name</label>
          <input type="text" {...formik.getFieldProps('lastName')} />
        </div>
        <div className={`${className}__form-controls`}>
          <label>Email</label>
          <input type="text" {...formik.getFieldProps('email')} />
        </div>
        <div className={`${className}__form-controls`}>
          <label>Username</label>
          <input type="text" {...formik.getFieldProps('username')} />
        </div>
        <div className={`${className}__form-controls`}>
          <label>Password</label>
          <input type="password" {...formik.getFieldProps('password')} />
        </div>
        <button>Submit</button>
      </form>
      {formik.errors && (
        <div>
          <ul>
            {Object.keys(formik.errors).map((key: string) => (
              <li>
                {key} - {formik.errors[key as keyof IUser]}
              </li>
            ))}
          </ul>
        </div>
      )}
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
