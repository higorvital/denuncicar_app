import React from 'react';
import { Text, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// import { Container } from './styles';

export default function About() {
  return (
    <View><Text>Texto</Text></View>
  );
}

About.navigationOptions = {
  tabBarLabel: 'Sobre',
  tabBarIcon: ({tintColor})=> <FontAwesome name="info" color={tintColor} size={20}/>
}