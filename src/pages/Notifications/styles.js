import styled from 'styled-components';

export const Container = styled.View`
    flex: 1;
    background: #17D0C5;
    padding: 30px;
`

export const TitleText = styled.Text`
    justify-content: center;
    align-items: center;
    text-align: center;
    border-bottom-width: 2px;
    border-bottom-color: #fff;
    text-transform: uppercase;
    padding-bottom: 5px;
    font-size: 18px;
    font-weight: bold; 
    margin-bottom: 5px;
    color: #fff;
    
`

export const Notification = styled.View`
    border-radius: 8px;
    background: #fff;
    box-shadow: 10px 5px 5px black;
    padding: 10px 20px; 
    margin-bottom: 10px;
`

export const NotificationRow = styled.View`
    flex-direction: row;
`

export const NotificationColLeft = styled.View`
    flex: 1;

`

export const NotificationColRight = styled.View`

`
export const NotificationCol = styled.View`
    flex: 1;

`

export const DateText = styled.Text`
    text-align: center;
    font-size: 10px;

`

export const ReportText = styled.Text`
    font-size: 28px;
`

export const StreetText = styled.Text`
    font-size: 16px;
    margin-top: 5px;
    margin-bottom: 10px;

`

export const PointsText = styled.Text`
    font-size: 48px;
    margin-left: 5px;
`

export const LabelText = styled.Text`
    font-size: 12px;
    margin-bottom: 5px;
`

export const CarInfoText = styled.Text`
    text-transform: uppercase;
    font-size: 14px;
`

export const CarColor = styled.View`
    width: 32px;
    height: 32px;
    background: red;
    border-radius: 16px;
`


export const NotificationList = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
})`
    margin-top: 20px;
    flex: 1;
`