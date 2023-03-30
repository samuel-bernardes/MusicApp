import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import { CountDown } from '../../../../components/countDown/CountDown';

import Styles from './ToolBar.style';

interface IToolbar {
    totalTimer: number;
    isPlaying: boolean;
    handleMusic: () => void;
}

export default function ToolBar(props: IToolbar) {

    const classes = Styles;

    const { isPlaying, totalTimer, handleMusic } = props;

    function convertMs(ms: number) {

        if(!ms) return 0;
        
        return Math.floor((ms/1000) % 60) / 60;
    }

    return (
        <View style={classes.container}>

            <Text style={[classes.timer, { opacity: 0.8 }]}>00:30</Text>

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

            {/*  <Text style={[classes.timer, { opacity: 0.8 }]}>00:30</Text> */}

            <CountDown minutes={convertMs(totalTimer)} isPaused={!isPlaying} onProgress={() => console.log('onProguess')} style={classes.timer} />

        </View>
    );
}