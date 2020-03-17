import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler'

export const Container = styled.View`
    flex: 1;
    padding: 30px;
    background: #17D0C5;
  
`;

export const Mensagem = styled.View`
    justify-content: center;
    align-items: center;
    padding: 100px 0;
`;

export const MensagemText = styled.Text`
    color: #fff;
    font-weight: 600;
    text-align: center;
    font-size: 18px;
    margin-top: 20px;
  text-transform: uppercase;
`;

export const ReturnButtonText = styled.Text`
    color: #fff;
    text-align: center;
    font-size: 18px;
  
`;


export const ReturnButton = styled(RectButton)`
      margin-top: 30px;
      background: #0FA199;
      align-self: stretch;
      padding: 10px 15px;
      border-radius: 4px;
      align-items: center;
`;