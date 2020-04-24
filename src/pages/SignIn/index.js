import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Modal from 'react-native-modal';


import { Form,
   Input,
   SubmitButton,
   Container,
   SubmitButtonText,
   OpcoesButton,
   OpcoesButtonText } from './styles';

import api from '../../services/api';

export default class SingIn extends Component {

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

  state = {
    email: '',
    senha: '',
    isModalVisible: false,
    error_response: ''
  }

  handleClick = async () => {

    const {navigation} = this.props;

    const {email, senha} = this.state;

    try{
      const response = await api.post(`/login`, {
        email,
        senha
      });

      const usuario = response.data;

      console.tron.log(usuario);

      if(!response.data.Status || (response.data.Status && response.data.Status!=='erro')){
        await AsyncStorage.setItem('usuario', JSON.stringify(usuario));
        navigation.navigate('Beginning');
      }else{
        this.setState({error_response: response.data.msg})
        this.toggleModal();
      }
    
    }catch(err){
      this.setState({error_response: "erro, tente novamente"})
      this.toggleModal();
    }


  }

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };


  render(){

    const {navigation} = this.props;
    const {isModalVisible, error_response} = this.state;

    return (
      <>
        <Container>
          <Form>
            <Input 
              name='email'
              autoCorrect={false}
              autoCaptalize="none"
              placeholder="E-mail"
              keyboardType="email-address"
              onChangeText={text=> this.setState({email: text})}
            />
            <Input 
              name='senha'
              autoCorrect={false}
              autoCaptalize="none"
              placeholder="Senha"        
              secureTextEntry
              onChangeText={text=> this.setState({senha: text})}
            />
            <SubmitButton onPress={this.handleClick}>
              <SubmitButtonText>Login</SubmitButtonText>
            </SubmitButton>

            <OpcoesButton onPress={() => navigation.navigate('SignUp')}>
              <OpcoesButtonText>Cadastre-se</OpcoesButtonText>
            </OpcoesButton>

          </Form>  

        <View style={{flex: 1}}>
          <Modal isVisible={isModalVisible}>
            <View style={{flex: 1}}>
              <Button title={error_response} color="#f00" onPress={this.toggleModal} />
            </View>
          </Modal>
        </View>
        </Container>
  
    </>
    );
  
  }
}