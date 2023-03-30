import React from 'react';

import { Text, View, Image } from 'react-native';

import Container from '../../components/container/Container';
import useProfile from '../../contexts/profile/useProfile';
import { colors } from '../../theme/colors';
import Styles from './Profile.style';

export default function ProfileView(props) {

    const classes = Styles;

    const { profile } = useProfile();

    return (
        <Container color={colors.brand.primary}>

            <View style={classes.imageBox}>

                <Image
                    source={{ uri: profile.picture }}
                    style={classes.profileImage}
                />

                <Text style={classes.nameTitle}>{profile.name}</Text>

                <Text style={classes.infosText}>Desenvolvedor procurando uma oportunidade</Text>
            </View>



        </Container>
    );
}