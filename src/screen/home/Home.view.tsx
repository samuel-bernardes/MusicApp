import React from 'react';

import { Text, View, FlatList, StatusBar, TouchableOpacity } from 'react-native';
import Search from '../../components/search/Search';
import Styles from './Home.style';

interface ISearch {
    text: string;
    data: any;
    renderList: any;
    bannerVisible: "none" | "flex";
    iconFunction: () => void;
    handleSearchChange: (text: string) => void;
}

export default function HomeView(props: ISearch) {

    const { text, data, renderList, bannerVisible, handleSearchChange, iconFunction } = props;

    const classes = Styles;

    return (
        <View style={classes.container}>
            <StatusBar hidden={true} />
            <Search text={text} handleSearchChange={handleSearchChange} iconFunction={iconFunction} />

            <View style={[classes.banner, { display: bannerVisible }]}>
                <Text style={classes.bannerText}>
                    Ouça suas músicas favoritas sem anúncios!
                </Text>
                <TouchableOpacity style={classes.button}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Premium</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                style={{ overflow: "hidden", marginBottom: 20, marginTop: 4 }}
                data={data}
                renderItem={renderList}
            />

        </View>
    );
}