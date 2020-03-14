import React, { Component } from 'react';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { 
   Container,
   DenunciaButton,
   ButtonText,
   DarkButton,
   Opcoes,
   DenunciaButtonText
  } from './styles';

  

export default class Menu extends Component {

  handleNavigation = () => {
    const {navigation} = this.props;

    navigation.navigate('Sucesso');
  }

  render(){
    return (
      <>
        <Container>
        <DenunciaButton onPress={this.handleNavigation}>
          <FontAwesome name={'bullhorn'} color='#fff' size={25}/>
          <DenunciaButtonText>Denunciar</DenunciaButtonText>
        </DenunciaButton>
  
        <Opcoes>
          <DarkButton>
            <MaterialIcons name='star' color='#fff' size={20}/>
            <ButtonText>Elogie um motorista</ButtonText>
          </DarkButton>
  
          <DarkButton>
            <FontAwesome name={'map-marker'} color='#fff' size={20}/>
            <ButtonText>Mapa de Infrações</ButtonText>
          </DarkButton>
  
          <DarkButton>
            <FontAwesome name={'question-circle'} color='#fff' size={20}/>
            <ButtonText>O que posso denunciar?</ButtonText>
          </DarkButton>
  
          <DarkButton>
            <FontAwesome name={'money'} color='#fff' size={20}/>
            <ButtonText>Troca de Pontos</ButtonText>
          </DarkButton>
  
        </Opcoes>
  
        </Container>
  
    </>
    );
  
  }

}

Menu.navigationOptions = {
  title: 'DenunciCAR',

}