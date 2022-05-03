import React, { useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import ProfileView from './Profile.view';
import Styles from "./Profile.style";
import ProfileHeader from '../../components/profileHeader/ProfileHeader';

interface IDetails {
    id: number;
    data: string;
    description: string;
    icon: string;
}

export default function Profile() {

    const classes = Styles;

    const [data, setData] = useState<IDetails[]>([
        {
            id: 1,
            data: "Nome Completo: ",
            description: "Samuel Bernardes Lopes Santos",
            icon: "face"
        },
        {
            id: 2,
            data: "CPF: ",
            description: "811.159.960-96",
            icon: "fingerprint"
        },
        {
            id: 3,
            data: "Descrição: ",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
            icon: "description"
        },
        {
            id: 4,
            data: "Perfil Musical: ",
            description: "Rock, Indie",
            icon: "music-note"
        },
        {
            id: 5,
            data: "Endereço: ",
            description: "Avenida Gabriela Barbosa Silva, 211 | Floresta Encantada - Esmeraldas - MG | CEP: 32809-092",
            icon: "place"
        },
        {
            id: 6,
            data: "Estado Civil: ",
            description: "Solteiro",
            icon: "favorite"
        }
    ])

    function RenderDetails({ item }: any) {
        return (
            <View style={classes.detailsBox}>

                <Icon name={item.icon} size={24} color="#DA0136" style={{marginRight: 10, alignSelf: "flex-start"}}/>

                <Text style={classes.data}>{item.data}
                    <Text style={classes.description}>{item.description}</Text>
                </Text>

            </View>
        );
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#27153E' }}>
            <ProfileHeader />
            <ProfileView
                data={data}
                renderDetails={RenderDetails} />
        </SafeAreaView>
    );
}