import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from './pages/Login';
import Menu from './pages/Menu';
import Sucesso from './pages/Sucesso';

const Routes = createAppContainer(
    createStackNavigator({
        Login,
        Menu,
        Sucesso,
    },
    {
        defaultNavigationOptions: {
            headerTitleAlign: 'center',
            headerBackTitleVisible: false,
            headerStyle: {
                backgroundColor: '#17D0C5',
                boxShadow: 'none',
            },
            headerTintColor: '#fff',
        },
    })
);


export default Routes;