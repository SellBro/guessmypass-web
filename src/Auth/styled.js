import styled from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';

import { Form as FormComponent } from 'shared/components';

export const Button = styled.button`
  border-radius: 5px;
  height: 50px;
  margin: 0 auto;
  margin-top: 10px;
  width: 80%;
  text-transform: uppercase;
  ${font.size(24)};
  ${font.bold};
  color: ${color.textPrimary};
  background-color: ${color.buttonPrimary};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
`;

export const FormContainer = styled.div`
  box-shadow: -2px 5px 13px 5px rgba(0, 0, 0, 0.41);
`;

export const Form = styled(FormComponent.Element)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  background-color: ${color.backgroundForm};
`;

export const FormHeader = styled.div`
  height: 100px;
  display: flex;
`;

export const ToggleButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  user-select: none;
  ${font.size(40)};
  ${font.bold};
  color: ${color.textPrimary};
  background-color: ${({ active }) => (active ? color.toggleButtonActive : color.grayDarken)};
`;

export const Auth = styled.div`
  margin: 0 0 0 28%;
  height: 100%;
  max-width: 1000px;
  @media (max-width: 1440px) {
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }
`;

export const CentralContainer = styled.div`
  height: 100%;
  position: absolute;
  left: 0;
  @media (max-width: 1440px) {
    position: relative;
  }
`;

export const AuthContainer = styled.div`
  height: 100%;
  position: relative;
`;

export const Title = styled.div`
  text-align: center;
  padding: 150px 0 50px 0;
  color: ${color.textPrimary};
  ${mixin.unSelectable}
  ${font.size(100)};
  ${font.title};
`;

export const CopyRights = styled.div`
  text-align: center;
  color: ${color.textGray};
  position: absolute;
  bottom: 10px;
  width: 100%;
  ${mixin.unSelectable}
  ${font.bold};
`;
