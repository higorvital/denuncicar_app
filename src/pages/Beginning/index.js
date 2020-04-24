import React, {Component} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../services/api';

import { Container,
   Header,
   InfoUser,
   WelcomeText,
   UserName,
   CarText,
   Content,
   Points,
   PointNumber,
   PointText,
   Camera,
   CameraCenter,
   ReportButton,
   ReportButtonText } from './styles';

export default class Beginning extends Component {

  state = {
    usuario: {}
  }

  async componentDidMount(){
    const user = await AsyncStorage.getItem('usuario');
    if(user){

      const usuario = JSON.parse(user);

      try {
        const response = await api.post(`login`, {
          email: usuario.email,
          senha: usuario.senha
        });

        this.setState({usuario: response.data});

          
      } catch (error) {
        console.log(error);
        this.setState({usuario: JSON.parse(usuario)});
      }
    }
  }

  render(){

    const {navigation} = this.props;
    const {usuario} = this.state;

    console.log(usuario.veiculos);

    return (
        <Container>
          <Header>
            <FontAwesome name='user-circle' size={100} color='#fff'/>
            <InfoUser>
              <WelcomeText>bem vindo,</WelcomeText>
              <UserName>{usuario.nome}</UserName>
              {usuario.veiculos && usuario.veiculos.length > 0 
                ? <CarText>{usuario.veiculos[0].marca} {usuario.veiculos[0].modelo}, {usuario.veiculos[0].placa}</CarText> 
                : <CarText>Sem veículo cadastrado</CarText>
              }
              </InfoUser>
          </Header>

          <Content>
            <Points>
              <PointNumber>{usuario.pontos}</PointNumber>
              <PointText>pontos de contribuição</PointText>
            </Points>
            <Camera>
              <CameraCenter>

              </CameraCenter>

            </Camera>
            <ReportButton onPress={()=>navigation.navigate('StepOne')}>
              <ReportButtonText>Denunciar</ReportButtonText>
              </ReportButton>
          </Content>
        </Container>
      );
  }
}

Beginning.navigationOptions = {
  tabBarLabel: 'Início',
  tabBarIcon: ({tintColor})=> <MaterialIcons name="home" color={tintColor} size={20}/>
}