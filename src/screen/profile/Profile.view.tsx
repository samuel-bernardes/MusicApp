import React from 'react';

import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import useProfile from '../../contexts/profile/useProfile';
import Styles from './Profile.style';

interface IDetailsView {
    data: object[];
    renderDetails: ({ video }: any) => void;
}

export default function ProfileView(props: IDetailsView) {

    const { data, renderDetails } = props;

    const classes = Styles;

    const { profile } = useProfile();

    return (
        <View style={classes.container}>
            <View style={classes.profile}>
                <Image
                    source={{ uri: profile.picture }}
                    style={{ width: 130, height: 130, borderRadius: 100, borderWidth: 2, borderColor: "#DA0034", marginLeft: 12 }}
                />
                <View style={classes.infos}>
                    <Text style={[classes.infosText, { fontSize: 16, fontWeight: "bold", marginBottom: 8 }]}>{profile.name}</Text>
                    <Text style={classes.infosText}>Idade: 18</Text>
                    <Text style={classes.infosText}>Sexo: Masculino</Text>
                    <Text style={classes.infosText}>Perfil musical: Rock, Indie</Text>
                </View>
            </View>

            <Text style={[classes.title, { marginTop: 24, fontSize: 20 }]}> Detalhes </Text>
            <FlatList
                style={classes.detailsList}
                data={data}
                renderItem={renderDetails}
                ListFooterComponent={
                    <TouchableOpacity onPress={() => null} style={[classes.editBox, { width: "80%" }]}>
                        <Icon name="edit" size={20} color="#DA0136" />
                        <Text style={{ color: " #171717", fontSize: 14 }}> Editar </Text>
                    </TouchableOpacity>
                }
                ListFooterComponentStyle={{ marginBottom: 30, alignItems: "center", paddingBottom: 12 }}

            />
        </View>
    );
}