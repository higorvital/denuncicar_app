import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { Form,
   Input,
   SubmitButton,
   Container,
   SubmitButtonText,
   OpcoesButton,
   OpcoesButtonText } from './styles';

export default class SingUp extends Component {

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  }

  static navigationOptions = {
    title: 'DenunciCAR',
    headerStyle: {
      elevation: 0, // remove shadow on Android
      backgroundColor: '#17D0C5',
    }
  }

  render(){

    const {navigation} = this.props;

    return (
      <>
        <Container>
          <Form>
            <Input 
              autoCorrect={false}
              autoCaptalize="none"
              placeholder="Nome completo"
            />
            <Input 
              autoCorrect={false}
              autoCaptalize="none"
              placeholder="Digite seu e-mail"
              keyboardType="email-address"
            />
            <Input 
              autoCorrect={false}
              autoCaptalize="none"
              placeholder="Senha"        
              secureTextEntry
            />
            <SubmitButton onPress={() => navigation.navigate('SignUp')}>
              <SubmitButtonText>Cadastre-se</SubmitButtonText>
            </SubmitButton>

          </Form>  
          
        </Container>
  
    </>
    );
  
  }
}