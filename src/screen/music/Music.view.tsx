import React from 'react';

import { View, StatusBar, Image, Text } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import Container from '../../components/container/Container';
import { colors } from '../../theme/colors';
import Player from './components/player/Player';
import ToolBar from './components/toolbar/ToolBar';

import Styles from './Music.style'
import { IMusicView } from './Music.interface';

function MusicView(props: IMusicView) {

    const classes = Styles;

    const { image, album, musicTitle, artist, totalTimer, isPlaying,
        currentMillis, handleMusic, setSongPosition
    } = props;

    return (

        <Container color={colors.brand.primary}>
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

                <Player totalDuration={totalTimer} currentMillis={currentMillis} setSongPosition={setSongPosition} />

                <ToolBar
                    isPlaying={isPlaying}
                    currentMillis={currentMillis}
                    handleMusic={handleMusic}
                />

            </View>

        </Container>

    );
};

export default MusicView;