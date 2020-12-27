import React from 'react';

import { Form } from 'shared/components';

import api from 'shared/utils/api';
import { prepareData } from './prepareData';

import * as S from '../styled';

const { Field } = Form;

const RegisterForm = ({ goToLogin }) => {
  const onSubmit = async values => {
    try {
      await api.post('user/register', prepareData({ ...values }));
      goToLogin(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form
      enableReinitialize
      initialValues={{
        email: '',
        username: '',
        password: '',
        passwordConfirm: '',
      }}
      validations={{
        email: [Form.is.required(), Form.is.email()],
        username: [Form.is.required(), Form.is.minLength(8)],
        password: [Form.is.required(), Form.is.password()],
        passwordConfirm: [Form.is.required(), Form.is.password(), Form.is.passwordsMatch()],
      }}
      onSubmit={onSubmit}>
      <S.Form>
        <Field.Input placeholder="Email" name="email" />
        <Field.Input placeholder="Username" name="username" />
        <Field.Passwordinput placeholder="Password" name="password" />
        <Field.Passwordinput placeholder="Confirm password" name="passwordConfirm" />
        <S.Button type="submit">Sign In</S.Button>
      </S.Form>
    </Form>
  );
};

export default RegisterForm;
