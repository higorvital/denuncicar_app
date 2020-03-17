import React from 'react';
import { View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { Container,
   Header,
   InfoUser,
   WelcomeText,
   UserName,
   CarText,
   Content,
   Points,
   PointNumber,
   PointText,
   Camera,
   CameraCenter,
   ReportButton,
   ReportButtonText } from './styles';

export default function Beginning({navigation}) {
  return (
      <Container>
        <Header>
          <FontAwesome name='user-circle' size={100} color='#fff'/>
          <InfoUser>
            <WelcomeText>bem vindo,</WelcomeText>
            <UserName>Fulano da Silva</UserName>
            <CarText>Ford Ka, XXX0000</CarText>
          </InfoUser>
        </Header>

        <Content>
          <Points>
            <PointNumber>60</PointNumber>
            <PointText>pontos de contribuição</PointText>
          </Points>
          <Camera>
            <CameraCenter>

            </CameraCenter>

          </Camera>
          <ReportButton onPress={()=>navigation.navigate('StepOne')}>
            <ReportButtonText>Denunciar</ReportButtonText>
            </ReportButton>
        </Content>
      </Container>
    );
}

Beginning.navigationOptions = {
  tabBarLabel: 'Início',
  tabBarIcon: ({tintColor})=> <MaterialIcons name="home" color={tintColor} size={20}/>
}