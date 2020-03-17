import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'

import { 
   Container,
   Mensagem,
   MensagemText,
   ReturnButton,
   ReturnButtonText
  } from './styles';

export default function Success({navigation}) {

  return (
    <>
      <Container>

        <Mensagem>
          <Icon name='check-circle' color='#fff' size={60}/>
          <MensagemText>Muito obrigado, a sua ação não será em vão. Nossa equipe fara de tudo para que sua denuncia chegue aos orgãos responsável.</MensagemText>
          <MensagemText>Você ganhou 2 pontos de colaboração.</MensagemText>
          <ReturnButton onPress={() => navigation.navigate('Beginning')}>
            <ReturnButtonText>Voltar</ReturnButtonText>
          </ReturnButton>
        </Mensagem>

      </Container>

  </>
  );
}