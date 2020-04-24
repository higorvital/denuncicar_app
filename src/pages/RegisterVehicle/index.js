import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, View} from 'react-native';
import Modal from 'react-native-modal';
import AsyncStorage from '@react-native-community/async-storage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



import { Form,
   Input,
   SubmitButton,
   Container,
   SubmitButtonText } from './styles';

import api from '../../services/api';

export default class RegisterVehicle extends Component {

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  }

  static navigationOptions = {
    tabBarLabel: 'Cadastrar Veículo',
    tabBarIcon: ({tintColor})=> <MaterialIcons name="directions-car" color={tintColor} size={20}/>
  
  }

  state = {
    email: '',
    senha: '',
    nome: '',
    sobrenome: '',
    cidade: '',
    estado: '',
    usuario: {},
    isModalVisible: false,
    isModalVisibleSuccess: false,
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

    const {placa, marca, modelo, cor, usuario} = this.state;

    const id_user = usuario.id ? usuario.id : '1';

    try {

      const response = await api.post(`/cadastrar_veiculo`, {
        id_user,
        placa,
        marca,
        modelo,
        cor
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
              name='placa'
              autoCorrect={false}
              autoCaptalize="none"
              placeholder="Placa "
              onChangeText={text=> this.setState({placa: text})}
            />
            <Input 
              name='marca'
              autoCorrect={false}
              autoCaptalize="none"
              placeholder="Marca"
              onChangeText={text=> this.setState({marca: text})}
            />
            <Input 
              name='modelo'
              autoCorrect={false}
              autoCaptalize="none"
              placeholder="Modelo"
              onChangeText={text=> this.setState({modelo: text})}
            />
            <Input 
              name='cor'
              autoCorrect={false}
              autoCaptalize="none"
              placeholder="Cor"
              onChangeText={text=> this.setState({cor: text})}
            />
            <SubmitButton onPress={this.handleClick}>
              <SubmitButtonText>Cadastrar</SubmitButtonText>
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
              <Button title="Cadatro feito com sucesso" color="#0FA199" onPress={()=> {
                  this.toggleModalSuccess();
                  navigation.navigate('Beginning')
                }} />
            </View>
          </Modal>
        </View>

        </Container>
  
    </>
    );
  
  }
}