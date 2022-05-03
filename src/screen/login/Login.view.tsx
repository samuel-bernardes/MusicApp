import React from 'react';

import { View, SafeAreaView, Text, StatusBar, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/FontAwesome';

import Styles from './Login.style'

interface ILoginView {
    email: string;
    password: string;
    setEmail: (email: string) => void;
    setPassword: (password: string) => void;
    handleGoogleSignIn: () => void;
}


export default function LoginView(props: ILoginView) {

    const classes = Styles;

    const { email, password, setEmail, setPassword, handleGoogleSignIn } = props;

    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: '#27153E' }}>
            <View style={classes.container}>

                <StatusBar hidden={true} />
                <View style={classes.box}>
                    <Icon name="headphones" size={42} color="#A4FF8E" />
                    <Text style={[classes.title, { marginLeft: 6 }]}>Musicly</Text>
                </View>

                <Text style={[classes.title, { fontSize: 30, marginTop: 60, marginBottom: 12 }]}>Login</Text>

                <TextInput
                    style={classes.input}
                    placeholderTextColor={"#FAFAFA"}
                    placeholder="Email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={(value: string) => setEmail(value)}
                />

                <TextInput
                    style={classes.input}
                    placeholderTextColor={"#FAFAFA"}
                    placeholder="Senha"
                    autoCapitalize="none"
                    value={password}
                    autoCorrect={false}
                    secureTextEntry={true}
                    onChangeText={(value: string) => setPassword(value)}
                />

                <TouchableOpacity style={classes.button}>
                    <Text style={classes.textButton}>Entrar</Text>
                </TouchableOpacity>

                <Text style={[classes.textButton, { marginTop: 24 }]}>
                    Ou continue com
                </Text>

                <View style={[classes.box, { marginTop: 24 }]}>
                    <TouchableOpacity style={classes.socialButton} onPress={handleGoogleSignIn}>
                        <Icon name="google" size={16} color="#FAFAFA" />
                        <Text style={[classes.textButton, { marginLeft: 12 }]}>Google</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={classes.socialButton}>
                        <Icon name="facebook" size={16} color="#FAFAFA" />
                        <Text style={[classes.textButton, { marginLeft: 12 }]}>Facebook</Text>
                    </TouchableOpacity>

                </View>

            </View>

        </SafeAreaView>

    );
}