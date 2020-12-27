import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { getJwtToken } from 'shared/utils/authToken';

import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import Console from './Console';

import * as S from './styled';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(false);

  const history = useHistory();

  useEffect(() => {
    if (getJwtToken()) {
      history.push('/home');
    }
  }, [history]);

  return (
    <S.Auth>
      <S.AuthContainer>
        <S.CentralContainer>
          <S.Title>guessmypass</S.Title>
          <S.FormContainer>
            <S.FormHeader>
              <S.ToggleButton onClick={() => setIsLogin(true)} active={isLogin}>
                Login
              </S.ToggleButton>
              <S.ToggleButton onClick={() => setIsLogin(false)} active={!isLogin}>
                Register
              </S.ToggleButton>
            </S.FormHeader>
            {isLogin ? <LoginForm /> : <RegisterForm goToLogin={setIsLogin} />}
          </S.FormContainer>
          <S.CopyRights>@ 2020, SellBro Version 1.0.0</S.CopyRights>
        </S.CentralContainer>
        <Console />
      </S.AuthContainer>
    </S.Auth>
  );
};

export default AuthPage;
