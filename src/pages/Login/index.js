import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { Form,
   Input,
   SubmitButton,
   Container,
   SubmitButtonText,
   OpcoesButton,
   OpcoesButtonText,
   Opcoes } from './styles';

export default class Login extends Component {

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  }

  handleNavigation = () => {
    const {navigation} = this.props;

    navigation.navigate('Menu');
  }

  render(){
    return (
      <>
        <Container>
          <Form>
            <Input 
              autoCorrect={false}
              autoCaptalize="none"
              placeholder="Login"
            />
            <Input 
              autoCorrect={false}
              autoCaptalize="none"
              placeholder="Senha"        
            />
            <SubmitButton onPress={this.handleNavigation}>
              <SubmitButtonText>Login</SubmitButtonText>
            </SubmitButton>
          </Form>
  
          
        </Container>
  
        <Opcoes>
        <OpcoesButton>
          <OpcoesButtonText>Esqueceu a senha?</OpcoesButtonText>
        </OpcoesButton>
        <OpcoesButton>
          <OpcoesButtonText>Cadastre-se</OpcoesButtonText>
        </OpcoesButton>
        </Opcoes>
    </>
    );
  
  }
}

Login.navigationOptions = {
  title: 'DenunciCAR',
  headerStyle: {
    elevation: 0, // remove shadow on Android
    backgroundColor: '#17D0C5',
  }
}