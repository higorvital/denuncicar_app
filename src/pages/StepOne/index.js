import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, View} from 'react-native';
import Modal from 'react-native-modal';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../../services/api';

import { Form,
   Input,
   SubmitButton,
   Container,
   SubmitButtonText,
   TextArea,
   SectionText,
   DescriptionText
    } from './styles';

export default class StepOne extends Component {

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  }

  static navigationOptions = {
    title: 'Denunciar Etapa 1',
/*    headerLeft: () => (
        <FontAwesome color='#fff' size={20} name="chevron-left"/>
    ),
*/
    headerStyle: {
      elevation: 0, // remove shadow on Android
      backgroundColor: '#17D0C5',
    }
  }

  state = {
    placa: '',
    cor: '',
    marca: '',
    modelo: '',
    usuario: {},
    isModalVisible: false,
    error_response: ''
  }

  async componentDidMount(){
    const usuario = await AsyncStorage.getItem('usuario');

    if(usuario){
      this.setState({usuario: JSON.parse(usuario)});
      console.tron.log(this.state.usuario.veiculos);
    }
  }


  handleClick = async () => {

    const {navigation} = this.props;

    const {placa, marca, cor, modelo, usuario} = this.state;

    const id_user = usuario.id ? usuario.id : '1';

    try {
      const response = await api.post(`/registrar_denuncia`, {
        placa,
        marca,
        modelo,
        cor,
        id_user,
        id_infracao: '2',
        n_anexos: '1',
        localizacao: "1.22220,-300000"
      });
  
      console.tron.log(response);
  
      if(!response.data.Status || (response.data.Status && response.data.Status!=='erro')){
        await AsyncStorage.setItem('id_denuncia', JSON.stringify(response.data.id_denuncia));
        navigation.navigate('StepTwo');
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

  render(){
    const {isModalVisible, error_response} = this.state;


    return (
      <>
        <Container>
          <Form>
            <Input 
              name="placa"
              autoCorrect={false}
              autoCaptalize="none"
              placeholder="Placa do veículo"
              onChangeText={text=> this.setState({placa: text})}
            />
            <Input 
              name="marca"
              autoCorrect={false}
              autoCaptalize="none"
              placeholder="Marca do veículo"
              onChangeText={text=> this.setState({marca: text})}
            />
            <Input 
              name="modelo"
              autoCorrect={false}
              autoCaptalize="none"
              placeholder="Modelo do veículo"
              onChangeText={text=> this.setState({modelo: text})}
            />
            <Input 
              name="cor"
              autoCorrect={false}
              autoCaptalize="none"
              placeholder="Cor do veículo"
              onChangeText={text=> this.setState({cor: text})}
            />
            <SubmitButton onPress={this.handleClick}>
              <SubmitButtonText>Ir para enviar imagem</SubmitButtonText>
            </SubmitButton>

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