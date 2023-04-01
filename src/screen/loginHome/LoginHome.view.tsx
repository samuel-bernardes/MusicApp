import React from 'react';

import { View, SafeAreaView, TouchableOpacity, Text, ImageBackground, StatusBar } from 'react-native';
import { Singer } from '../../assets/images';

import Styles from './LoginHome.style';

interface ILoginView {
    buttonFunction: () => void;
    textFunction: () => void;
}


function LoginHomeView(props: ILoginView) {

    const classes = Styles;

    const { buttonFunction, textFunction } = props;

    return (

        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar hidden={true} />
            <ImageBackground
                style={{
                    width: '100%',
                    height: '100%',
                    justifyContent: "flex-end"
                }}
                source={Singer}
                resizeMode="cover"
            >

                <View style={{ marginBottom: 50 }}>

                    <Text style={classes.title}>Aproveite seu dia com uma boa música!</Text>

                    <TouchableOpacity style={classes.button} onPress={buttonFunction}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Login</Text>
                    </TouchableOpacity>

                    <Text
                        style={classes.text}
                        onPress={textFunction}
                    >
                        Criar uma conta
                    </Text>
                    
                </View>


            </ImageBackground>


        </SafeAreaView>

    );
}

export default LoginHomeView;