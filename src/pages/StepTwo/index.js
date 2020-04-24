import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, View, Image, ImageBackground} from 'react-native';
import Modal from 'react-native-modal';

import { AppRegistry, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../../services/api';

import { Form,
   Input,
   SubmitButton,
   Container,
   SubmitButtonText,
   OpcoesButton,
   OpcoesButtonText } from './styles';
import Axios from 'axios';

export default class StepTwo extends Component {

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  }

  static navigationOptions = {
    title: 'Denunciar Etapa 2',
    headerStyle: {
      elevation: 0, // remove shadow on Android
      backgroundColor: '#17D0C5',
    }
  }

  state = {
    isModalVisibleError: false,
    isModalVisibleImage: false,
    error_response: '',
    image: '',
    id_denuncia: ''
  }

  async componentDidMount(){
    const id_denuncia = await AsyncStorage.getItem('id_denuncia');

    if(id_denuncia){
      this.setState({id_denuncia: JSON.parse(id_denuncia)});
     }
  }


  toggleModalError = () => {
    this.setState({isModalVisibleError: !this.state.isModalVisibleError});
  };

  toggleModalImage = () => {
    this.setState({isModalVisibleImage: !this.state.isModalVisibleImage});
  };

  sendImage = async () => {
    const data = new FormData();
    const {image, id_denuncia} = this.state;
    const {navigation} = this.props;

    data.append('file',
      {
         uri: image,
         name:`denuncia${id_denuncia}.jpg`,
         type:'image/jpg'
      });

      try {
        const response = await api.post(`up_anexo/${id_denuncia}`, data);

        console.tron.log(response);
  
        if(!response.data.Status || (response.data.Status && response.data.Status!=='erro')){
          navigation.navigate('Success');
        }else{
          this.setState({error_response: response.data.msg})
          this.toggleModalError();
        }
  

      } catch (error) {
        navigation.navigate('Success');
      }
  }

  render() {

    const {isModalVisibleError, isModalVisibleImage, error_response, image} = this.state;

    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permissão para usar a câmera',
            message: 'Precisamos de sua permissão para usar sua câmera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancelar',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancelar',
          }}
          onGoogleVisionBarcodesDetected={({ barcodes }) => {
            console.log(barcodes);
          }}
        />
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
            <Text style={{ fontSize: 14 }}> SNAP </Text>
          </TouchableOpacity>
        </View>



        <View style={{flex: 1}}>
          <Modal isVisible={isModalVisibleImage}>
            <View style={{flex: 1}}>
              {image && <Image source={{uri: image}} style={{width: '100%', height: 300}}/>}
              
              <Button title="Enviar Imagem" color="#0FA199" onPress={this.sendImage} />
              <Button title="Tirar outra foto" color="#f00" onPress={this.toggleModalImage} />
            </View>
          </Modal>
        </View>


        <View style={{flex: 1}}>
          <Modal isVisible={isModalVisibleError}>
            <View style={{flex: 1}}>
              <Button title={error_response} color="#f00" onPress={this.toggleModalError} />
            </View>
          </Modal>
        </View>


      </View>
    );
  }

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
      this.setState({image: data.uri, isModalVisibleImage: !this.state.isModalVisibleImage});

    }
  };


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});