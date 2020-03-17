import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import SignIn from './pages/SignIn';
import SignUp from './pages/SingUp';
import About from './pages/About';
import Contributions from './pages/Contributions';
import Notifications from './pages/Notifications';
import Beginning from './pages/Beginning';
import StepOne from './pages/StepOne';
import StepTwo from './pages/StepTwo';
import Success from './pages/Success';

export default (isSigned=true) => createAppContainer(
    createSwitchNavigator({
        Sign: createSwitchNavigator({
            SignIn,
            SignUp,
            Success
        }),
        App: createBottomTabNavigator({
            Beginning,
            Contributions,
            Notifications,
            About,
        },
        {
            tabBarOptions: {
                activeTintColor: '#fff',
                inactiveTintColor: 'rgba(255, 255, 255, 0.5)',
                keyboardHidesTabBar: true,
                style: {
                    backgroundColor: '#0FA199'
                }
            }
        }),
        Report: createStackNavigator({
            StepOne,
            StepTwo,
        },
        {
            defaultNavigationOptions: {
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerStyle: {
                    backgroundColor: '#17D0C5'
                },
                headerTintColor: '#fff',
            }
        }),
    },{
        initialRouteName: isSigned ? 'App' : 'Sign'
    })
);