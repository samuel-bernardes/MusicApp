import React from 'react';
import { View } from 'react-native';

import Slider from '@react-native-community/slider';

import Styles from './Player.style';

interface IPlayerView {
    totalDuration: number,
    currentMillis: number,
    setSongPosition: (currentPosition: number) => void
}

export default function Player(props: IPlayerView) {

    const classes = Styles;

    const { totalDuration, currentMillis, setSongPosition } = props;

    function onSliderValueChange(value: number) {
        const newTimer = Math.round(value);
        setSongPosition(newTimer);
    }
    return (
        <View style={classes.container}>
            <Slider
                style={{ width: '100%', height: 40 }}
                minimumValue={0}
                maximumValue={totalDuration || 30}
                value={currentMillis}
                step={0.1}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#3C2D51"
                thumbTintColor="#A4FF8E"
                onValueChange={(value: number) => onSliderValueChange(value)}
            />
        </View>
    );
}
