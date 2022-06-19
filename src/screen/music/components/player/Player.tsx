import React, { useState } from 'react';
import { Slider, Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

import Styles from './Player.style';

interface IPlayer {
    playPosition: number;
    playDuration: number;
}

export default function Player(props: IPlayer) {

    const classes = Styles;

    const { playPosition, playDuration } = props;

    function calcBar(){
        if(playPosition !== null && playDuration !== null){
            return playPosition / playDuration;
        }
        return 0;
    }

    return (
        <View style={classes.container}>
            <Slider
                style={{ width: '100%', height: 0 }}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="#FFF"
                maximumTrackTintColor="#3C2D51"
                thumbTintColor="#A4FF8E"
            />
        </View>
    );
}