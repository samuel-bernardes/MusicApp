import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import { CountDown } from '../../../../components/countDown/CountDown';

import Styles from './ToolBar.style';

interface IToolbar {
    currentTimer: number,
    isPlaying: boolean,
    currentMillis: number,
    setCurrentTimer: (currentTimer: number) => void,
    handleMusic: () => void;
}

export default function ToolBar(props: IToolbar) {

    const classes = Styles;

    const { isPlaying, currentTimer, currentMillis, setCurrentTimer, handleMusic } = props;

    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }

    return (
        <View style={classes.container}>

            <Text style={classes.timer} >
                {"00:" + formatTime(currentMillis)}
            </Text>

            <Icon name="backward" size={20} color="#FAFAFA" />

            <TouchableOpacity style={classes.pauseView} onPress={() => handleMusic()}>

                {isPlaying ? (

                    <Icon name="pause" size={18} color="#FAFAFA" />
                ) : (

                    <Icon name="play" size={18} color="#FAFAFA" />
                )
                }

            </TouchableOpacity>

            <Icon name="forward" size={18} color="#FAFAFA" />

            <Text style={[classes.timer, { opacity: 0.8 }]}>00:30</Text>

        </View>
    );
}