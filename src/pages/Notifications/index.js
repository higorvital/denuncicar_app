import React from 'react';
import { View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Container,
   TitleText,
   Notification,
   NotificationRow,
   NotificationCol,
   NotificationColLeft,
   NotificationColRight,
   DateText,
   ReportText,
   StreetText,
   PointsText,
   LabelText,
   CarInfoText,
   CarColor,
    NotificationList} from './styles';

export default function Notifications() {

  const notifications = [{
    title: 'Ultrapassagem Perigosa',
    date: '17 de novembro de 2019 às 14:25h',
    street: 'Rua Sobe e Desce',
    points: '1',
    plaque: 'XXX0000',
    brand: 'FIAT',
    model: 'UNO'
  },{
    title: 'Ultrapassagem Perigosa',
    date: '17 de novembro de 2019 às 14:25h',
    street: 'Rua Sobe e Desce',
    points: '1',
    plaque: 'XXX0000',
    brand: 'FIAT',
    model: 'UNO'
  },{
    title: 'Ultrapassagem Perigosa',
    date: '17 de novembro de 2019 às 14:25h',
    street: 'Rua Sobe e Desce',
    points: '1',
    plaque: 'XXX0000',
    brand: 'FIAT',
    model: 'UNO'
  }]

  return (
    <Container>
      <TitleText>Minhas notificações</TitleText>

      <NotificationList 
        data={notifications}
        keyExtractor={notification => notification.title}
        renderItem={({item})=>(
          <Notification>
            <DateText>{item.date}</DateText>
            <NotificationRow>
              <NotificationColLeft>
                <ReportText>{item.title}</ReportText>
                <StreetText>{item.street}</StreetText>
              </NotificationColLeft>
              <NotificationColRight>
                <PointsText>+{item.points}</PointsText>
              </NotificationColRight>
            </NotificationRow>
            <NotificationRow>
              <NotificationCol>
                <LabelText>Placa</LabelText>
                <CarInfoText>{item.plaque}</CarInfoText>
              </NotificationCol>
              <NotificationCol>
                <LabelText>Marca</LabelText>
                <CarInfoText>{item.brand}</CarInfoText>
              </NotificationCol>
              <NotificationCol>
                <LabelText>Modelo</LabelText>
                <CarInfoText>{item.model}</CarInfoText>
              </NotificationCol>
              <NotificationCol>
                <LabelText>Cor</LabelText>
                <CarColor></CarColor>
              </NotificationCol>
            </NotificationRow>
          </Notification>
        )}
    
      />

    </Container>
  );
}

Notifications.navigationOptions = {
  tabBarLabel: 'Notificações',
  tabBarIcon: ({tintColor})=> <MaterialIcons name="home" color={tintColor} size={20}/>
}