import styled from 'styled-components';
import {RectButton} from 'react-native-gesture-handler'


export const Container = styled.View`
    flex: 1;
    background: #17D0C5;
`
export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    background: #17D0C5;
    padding: 15px 25px;
    justify-content: center;
`

export const InfoUser = styled.View`
    flex: 1;
    margin-left: 15px;
`
export const WelcomeText = styled.Text`
    font-size: 20px;
    color: #fff;
    margin-bottom: 5px;

`
export const UserName = styled.Text`
    font-size: 22px;
    color: #fff;
    margin-bottom: 5px;

`
export const CarText = styled.Text`
    font-size: 18px;
    color: #fff;
    font-weight: bold;
    margin-bottom: 5px;

`
export const Content = styled.View`
    margin: 0 20px;
    padding: 30px;
    flex: 1;
`
export const Points = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0 50px;
`
export const PointNumber = styled.Text`
    color: #fff;
    font-size: 48px;
    margin-right: 10px;
    font-weight: bold;
`

export const PointText = styled.Text`
    color: #fff;
    font-size: 18px;
`

export const Camera = styled.View`
    margin-top: 20px;
    padding: 0px 50px;
    border: 2px solid #fff;
    justify-content: center;
    align-items: center;
`

export const CameraCenter = styled.View`
    background: #fff;
    border-radius: 30px;
    height: 60px;
    width: 60px;
    margin: 60px 0;
`

export const ReportButton = styled(RectButton)`
    margin-top: 15px;
    border-radius: 4px;
    align-self: stretch;
    padding: 5px 10px;
    background: #F25F56;
    justify-content: center;
    align-items: center;
`

export const ReportButtonText = styled.Text`
    font-size: 20px;
    color: #fff;
    text-transform: uppercase;
`