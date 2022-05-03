import React, { useState } from 'react';
import LoginView from './Login.view';
import * as AuthSession from 'expo-auth-session';

import { useNavigation } from "@react-navigation/native";

const CLIENT_ID = process.env.CLIENT_ID;
const REDIRECT_URI = process.env.REDIRECT_URI;


export default function Login() {

    const navigation = useNavigation();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    async function handleGoogleSignIn() {

        const RESPONSE_TYPE = 'token';
        const SCOPE = encodeURI('profile email');

        const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`
        const response = await AuthSession
            .startAsync({ authUrl });

        if (response.type === 'success') {
            navigation.navigate('Root', {
                screen: 'Home',
                params: { token: response.params.access_token },
            })
        }

    }

    return (
        <LoginView
            setEmail={setEmail}
            setPassword={setPassword}
            handleGoogleSignIn={handleGoogleSignIn}
            email={email}
            password={password}
        />
    );
}