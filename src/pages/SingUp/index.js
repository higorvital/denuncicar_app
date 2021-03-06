import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, View} from 'react-native';
import Modal from 'react-native-modal';

import { Form,
   Input,
   SubmitButton,
   Container,
   SubmitButtonText } from './styles';

import api from '../../services/api';

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

  state = {
    email: '',
    senha: '',
    nome: '',
    sobrenome: '',
    cidade: '',
    estado: '',
    isModalVisible: false,
    isModalVisibleSuccess: false,
    error_response: ''
  }

  handleClick = async () => {

    const {navigation} = this.props;

    const {email, senha, nome, sobrenome, cidade, estado} = this.state;

    try {
      const response = await api.post(`/cadastro`, {
        email,
        senha,
        nome,
        sobrenome,
        cidade,
        estado
      });
      

      if(!response.data.Status || (response.data.Status && response.data.Status!=='erro')){
        this.toggleModalSuccess();
      }else{
        this.setState({error_response: response.data.msg})
        this.toggleModal();
      }

      
    } catch (error) {
      this.setState({error_response: "erro, tente novamente"})
      this.toggleModal();
    }

  }

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };

  toggleModalSuccess = () => {
    this.setState({isModalVisibleSuccess: !this.state.isModalVisibleSuccess});
  };


  render(){

    const {navigation} = this.props;

    const {isModalVisible, isModalVisibleSuccess, error_response} = this.state;

    return (
      <>
        <Container>
          <Form>
            <Input 
              name='email'
              autoCorrect={false}
              autoCaptalize="none"
              placeholder="Digite seu e-mail"
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
            <Input 
              name='nome'
              autoCorrect={false}
              autoCaptalize="none"
              placeholder="Nome "
              onChangeText={text=> this.setState({nome: text})}
            />
            <Input 
              name='sobrenome'
              autoCorrect={false}
              autoCaptalize="none"
              placeholder="Sobrenome"
              onChangeText={text=> this.setState({sobrenome: text})}
            />
            <Input 
              name='cidade'
              autoCorrect={false}
              autoCaptalize="none"
              placeholder="Cidade"
              onChangeText={text=> this.setState({cidade: text})}
            />
            <Input 
              name='estado'
              autoCorrect={false}
              autoCaptalize="none"
              placeholder="Estado"
              onChangeText={text=> this.setState({estado: text})}
            />
            <SubmitButton onPress={this.handleClick}>
              <SubmitButtonText>Cadastre-se</SubmitButtonText>
            </SubmitButton>
            <SubmitButton color="#fff" onPress={()=> navigation.navigate('SignIn')}>
              <SubmitButtonText>Voltar</SubmitButtonText>
            </SubmitButton>
          </Form>  

        <View style={{flex: 1}}>
          <Modal isVisible={isModalVisible}>
            <View style={{flex: 1}}>
              <Button title={error_response} color="#f00" onPress={this.toggleModal} />
            </View>
          </Modal>
        </View>

        <View style={{flex: 1}}>
          <Modal isVisible={isModalVisibleSuccess}>
            <View style={{flex: 1}}>
              <Button title="Cadatro feito com sucesso" color="#0FA199" onPress={()=> navigation.navigate('SignIn')} />
            </View>
          </Modal>
        </View>

          
        </Container>
  
    </>
    );
  
  }
}