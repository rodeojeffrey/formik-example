import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import FormView from './FormView';
import { addUser } from './action';

interface IProps {}

function FormContainer(props: IProps) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: ''
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string().required('Required').min(2, 'Too short'),
      lastName: Yup.string().required('Required').min(2, 'Too short'),
      username: Yup.string()
        .required('Required')
        .min(4, 'Too short')
        .max(16, 'Too long')
        .matches(/^\S+$/, 'No spaces allowed'),
      email: Yup.string()
        .required('Required')
        .min(4, 'Too short')
        .matches(
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          'Invalid email address'
        ),
      password: Yup.string()
        .required('Required')
        .min(8, 'Too short')
        .matches(/\d/, 'You need a number')
        .matches(/[A-Z]/, 'You need an upper')
        .matches(/[a-z]/, 'You need a lower')
    }),
    onSubmit: values => {
      console.log(values);
      dispatch(addUser({ ...values }));
    }
  });

  return <FormView formik={formik} />;
}
export default FormContainer;
