import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler'

export const Container = styled.View`
    flex: 1;
    padding: 30px;
    background: #17D0C5;
  
`;


export const Form = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`

`

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

export const TextArea = styled.TextInput.attrs({
  placeholderTextColor: '#fff'
})`
  border: 1px solid #fff;
  border-radius: 4px;
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

export const SectionText = styled.Text`

  font-size: 14px;
  border-bottom-width: 2px;
  border-color: #fff;
  color: #fff;
  margin-bottom: 3px;
  text-align: center;
  padding-bottom: 5px;

`

export const DescriptionText = styled.Text`

  font-size: 12px;
  color: #fff;
  margin-bottom: 20px;
  text-align: center;

`