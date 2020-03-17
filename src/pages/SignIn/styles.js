import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler'

export const Container = styled.View`
    flex: 1;
    padding: 30px;
    background: #17D0C5;
  
`;


export const Form = styled.View`
    padding: 100px 0;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#fff'
})`
  border: 1px solid #fff;
  border-radius: 4px;
  height: 50px;
  padding: 0 20px;
  margin-bottom: 20px;
  color: #fff;
`;


export const SubmitButton = styled(RectButton)`
      background: #0FA199;
      align-self: stretch;
      padding: 10px 15px;
      border-radius: 4px;
      align-items: center;
`;

export const SubmitButtonText = styled.Text`
  color: #fff;
  justify-content: center;
  align-items: center;
`;

export const Opcoes = styled.View`

`

export const OpcoesButton = styled(RectButton)`
    
    background: transparent;
    align-self: stretch;
    padding: 10px 15px;
    align-items: center;
    margin-top: 20px;
`;

export const OpcoesButtonText = styled.Text`
  color: #fff;
  justify-content: center;
  align-items: center;
  font-size: 16px;
`;

