import React, {Component} from 'react';
import PropTypes from 'prop-types';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { Form,
   Input,
   SubmitButton,
   Container,
   SubmitButtonText,
   TextArea,
   SectionText,
   DescriptionText
    } from './styles';

export default class StepTwo extends Component {

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  }

  static navigationOptions = {
    title: 'Denunciar Etapa 2',
/*    headerLeft: () => (
        <FontAwesome color='#fff' size={20} name="chevron-left"/>
    ),
*/
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
              placeholder="Placa do veículo"
            />
            <SectionText>Características do veículo</SectionText>
            <DescriptionText>Informe 2 características do veículo caso não tenha imagens do veículo em anexo</DescriptionText>
            <Input 
              autoCorrect={false}
              autoCaptalize="none"
              placeholder="Marca do veículo"
            />
            <Input 
              autoCorrect={false}
              autoCaptalize="none"
              placeholder="Modelo do veículo"
            />
            <SectionText>Infração</SectionText>
            <DescriptionText>Informe 2 características do veículo caso não tenha imagens do veículo em anexo</DescriptionText>
            <TextArea 
              autoCorrect={false}
              autoCaptalize="none"
              multiline={true}
              numberOfLines={5}
              placeholder="Descreva a infração de trânsito"        
            />
            <Input 
              autoCorrect={false}
              autoCaptalize="none"
              placeholder="Localização"
            />
            <SubmitButton onPress={() => navigation.navigate('Success')}>
              <SubmitButtonText>Finalizar denúncia</SubmitButtonText>
            </SubmitButton>

          </Form>  
          
        </Container>
  
    </>
    );
  
  }
}