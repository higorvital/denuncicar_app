import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler'

export const Container = styled.View`
    flex: 1;
    padding: 30px;
    background: #fff;
  
`;

export const DenunciaButton = styled(RectButton)`
      background: #F25F56;
      align-self: stretch;
      padding: 20px 15px;
      border-radius: 4px;
      align-items: center;
      margin-bottom: 20px;
      flex-direction: row;
      justify-content: flex-start;
`;


export const DarkButton = styled(RectButton)`
      background: #0FA199;
      padding: 15px 15px;
      border-radius: 4px;
      align-items: center;
      margin-bottom: 20px;
      flex-direction: row;
      justify-content: flex-start;
`;

export const ButtonText = styled.Text`
  color: #fff;
  justify-content: center;
  align-items: center;
  text-align: justify;
  margin-left: 10px;
`;

export const DenunciaButtonText = styled.Text`
  color: #fff;
  justify-content: center;
  align-items: center;
  text-align: justify;
  margin-left: 10px;
  font-size: 16px;
  font-weight: 600;
`;

export const Opcoes = styled.View`

`