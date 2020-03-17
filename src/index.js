import 'react-native-gesture-handler';

import React from 'react';

import {StatusBar} from 'react-native';

import './config/ReactotronConfig'

import createRouter from './routes';

export default function App(){

    const Routes = createRouter();

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#17D0C5" />
            <Routes />
        </>
    )
}

