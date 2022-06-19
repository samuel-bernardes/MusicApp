import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

import Styles from './ToolBar.style';

interface IToolbar {
    currentTimer: string;
    isPlaying: boolean;
    handleMusic: () => void;
}

export default function ToolBar(props: IToolbar) {

    const classes = Styles;

    const { currentTimer, isPlaying, handleMusic } = props;

    return (
        <View style={classes.container}>

            <Text style={classes.timer}>{currentTimer}</Text>

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