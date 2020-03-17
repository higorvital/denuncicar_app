import React from 'react';
import { View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// import { Container } from './styles';

export default function Notifications() {
  return (
    <View />
  );
}

Notifications.navigationOptions = {
  tabBarLabel: 'Notificações',
  tabBarIcon: ({tintColor})=> <FontAwesome name="bell" color={tintColor} size={20}/>
}