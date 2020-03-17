import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { Form,
   Input,
   SubmitButton,
   Container,
   SubmitButtonText,
   OpcoesButton,
   OpcoesButtonText } from './styles';

export default class StepOne extends Component {

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  }

  static navigationOptions = {
    title: 'Denunciar Etapa 1',
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
            <SubmitButton onPress={() => navigation.navigate('StepTwo')}>
              <SubmitButtonText>Continuar</SubmitButtonText>
            </SubmitButton>
          </Form>            
        </Container>
  
    </>
    );
  
  }
}