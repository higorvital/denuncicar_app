import React from 'react';
import { View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Container,
   TitleText,
   Contribution,
   ContributionRow,
   ContributionCol,
   ContributionColLeft,
   ContributionColRight,
   DateText,
   ReportText,
   StreetText,
   PointsText,
   LabelText,
   CarInfoText,
   CarColor,
    ContributionList} from './styles';

export default function Contributions() {

  const contributions = [{
    title: 'Ultrapassagem Perigosa',
    date: '17 de novembro de 2019 às 14:25h',
    street: 'Rua Sobe e Desce',
    points: '1',
    plaque: 'XXX0000',
    brand: 'FIAT',
    model: 'UNO'
  },{
    title: 'Ultrapassagem Perigosa',
    date: '17 de novembro de 2019 às 14:25h',
    street: 'Rua Sobe e Desce',
    points: '1',
    plaque: 'XXX0000',
    brand: 'FIAT',
    model: 'UNO'
  },{
    title: 'Ultrapassagem Perigosa',
    date: '17 de novembro de 2019 às 14:25h',
    street: 'Rua Sobe e Desce',
    points: '1',
    plaque: 'XXX0000',
    brand: 'FIAT',
    model: 'UNO'
  }]

  return (
    <Container>
      <TitleText>Minhas contribuições</TitleText>

      <ContributionList 
        data={contributions}
        keyExtractor={contribution => contribution.title}
        renderItem={({item})=>(
          <Contribution>
            <DateText>{item.date}</DateText>
            <ContributionRow>
              <ContributionColLeft>
                <ReportText>{item.title}</ReportText>
                <StreetText>{item.street}</StreetText>
              </ContributionColLeft>
              <ContributionColRight>
                <PointsText>+{item.points}</PointsText>
              </ContributionColRight>
            </ContributionRow>
            <ContributionRow>
              <ContributionCol>
                <LabelText>Placa</LabelText>
                <CarInfoText>{item.plaque}</CarInfoText>
              </ContributionCol>
              <ContributionCol>
                <LabelText>Marca</LabelText>
                <CarInfoText>{item.brand}</CarInfoText>
              </ContributionCol>
              <ContributionCol>
                <LabelText>Modelo</LabelText>
                <CarInfoText>{item.model}</CarInfoText>
              </ContributionCol>
              <ContributionCol>
                <LabelText>Cor</LabelText>
                <CarColor></CarColor>
              </ContributionCol>
            </ContributionRow>
          </Contribution>
        )}
    
      />

    </Container>
  );
}

Contributions.navigationOptions = {
  tabBarLabel: 'Contribuições',
  tabBarIcon: ({tintColor})=> <MaterialIcons name="thumb-up" color={tintColor} size={20}/>
}