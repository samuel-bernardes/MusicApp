import React from 'react';

import { Image, Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import useProfile from '../../contexts/profile/useProfile';

import Styles from './ProfileHeader.style';



export default function ProfileHeader() {

    const classes = Styles;

    const { profile } = useProfile();

    return (
        <View style={classes.container}>
            <Icon name="chevron-left" size={30} color="#fafafa" />
            <Text style={classes.title}>Meu Perfil</Text>
            <Image
                source={{ uri: profile.picture }}
                style={{ width: 50, height: 50, borderRadius: 100 }}
            />
        </View>
    );
}