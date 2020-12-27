import React from 'react';
import { useHistory } from 'react-router-dom';

import { Form } from 'shared/components';

import { setJwtToken } from 'shared/utils/authToken';
import api from 'shared/utils/api';
import { prepareData } from './prepareData';

import * as S from '../styled';

const { Field } = Form;

const LoginForm = () => {
  const history = useHistory();

  return (
    <Form
      enableReinitialize
      initialValues={{
        email: '',
        password: '',
      }}
      validations={{
        email: [Form.is.required(), Form.is.email()],
        password: [Form.is.required(), Form.is.minLength(8)],
      }}
      onSubmit={async values => {
        try {
          const password = prepareData({ ...values });
          const { token } = await api.post('user/login', {
            email: values.email,
            password,
          });
          setJwtToken(token);
          history.push('/home');
        } catch (e) {
          console.log(e);
        }
      }}>
      <S.Form>
        <Field.Input placeholder="Email" name="email" />
        <Field.Passwordinput placeholder="Password" name="password" />
        <S.Button type="submit">Sign In</S.Button>
      </S.Form>
    </Form>
  );
};

export default LoginForm;
