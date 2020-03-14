import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'

import { 
   Container,
   Mensagem,
   MensagemText
  } from './styles';

export default function Sucesso() {
  return (
    <>
      <Container>

        <Mensagem>
          <Icon name='stars' color='#fff' size={40}/>
          <MensagemText>Parabens! A denuncia feita com sucesso!</MensagemText>
        </Mensagem>

      </Container>

  </>
  );
}

Sucesso.navigationOptions = {
  title: 'DenunciCAR',
  headerStyle: {
    elevation: 0, // remove shadow on Android
    backgroundColor: '#17D0C5',
  }
}