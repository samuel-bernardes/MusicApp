import React from 'react';
import LoginView from './LoginHome.view';

import { useNavigation } from "@react-navigation/native";

function LoginHome() {

    const navigation = useNavigation();

    function loginButton(){
        navigation.navigate('Login');
    }

    return (
        <LoginView
            buttonFunction={loginButton}
            textFunction={() => null}
        />
    );
}

export default LoginHome;