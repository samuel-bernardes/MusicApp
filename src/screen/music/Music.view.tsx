import React from 'react';

import { View, SafeAreaView, StatusBar, Image, Text } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import Player from './components/player/Player';
import ToolBar from './components/toolbar/ToolBar';

import Styles from './Music.style'

interface IMusicView {
    image: string;
    album: string;
    artist: string;
    musicTitle: string;
    currentTimer: string;
    isPlaying: boolean;
    playPosition: number;
    playDuration: number;
    handleMusic: () => void;
}

export default function MusicView(props: IMusicView) {

    const classes = Styles;

    const { image, album, musicTitle, artist, currentTimer, isPlaying, playPosition, playDuration, handleMusic } = props;

    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: '#27153E' }}>
            <StatusBar hidden={true} />
            <View style={classes.container}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={[classes.textAlbum, classes.textColor, { marginRight: 12 }]}>{album}</Text>

                    <Icon name="angle-down" size={20} color="#FAFAFA"></Icon>
                </View>


                <Image
                    style={classes.image}
                    source={{ uri: image }}
                />

                <Text style={[classes.textMusic, classes.textColor]}>{musicTitle}</Text>

                <Text style={[classes.textAlbum, classes.textColor, { opacity: 0.9 }]}>{artist}</Text>

                <Player playPosition={playPosition} playDuration={playDuration}/>

                <ToolBar currentTimer={currentTimer} isPlaying={isPlaying} handleMusic={handleMusic} />


            </View>

        </SafeAreaView>

    );
}