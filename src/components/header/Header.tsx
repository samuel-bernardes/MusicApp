import React from 'react';

import { Image, Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import useProfile from '../../contexts/profile/useProfile';

import Styles from './Header.style';

export default function Header() {

    const classes = Styles;

    const { profile } = useProfile();

    return (
        <View style={classes.container}>
            <View style={classes.box}>
                <Icon name="compact-disc" size={30} color="#A4FF8E" />
                <Text style={classes.title}>Musicly</Text>
            </View>
            <View style={classes.box}>
                <Text style={classes.username}>Olá, {profile?.given_name}</Text>
                <Image
                    source={{ uri: profile?.picture }}
                    style={{ width: 50, height: 50, borderRadius: 100, marginLeft: 10 }}
                />
            </View>
        </View>
    );
}