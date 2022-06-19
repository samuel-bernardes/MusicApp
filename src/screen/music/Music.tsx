import React, { useEffect, useState } from 'react';
import MusicView from './Music.view';
import { Audio } from 'expo-av';

import { useNavigation, useRoute } from "@react-navigation/native";
import { BackHandler } from 'react-native';

interface ISoundObj {
    androidImplementation: string;
    didJustFinish: boolean;
    DurationMillis: number;
    isBuffering: boolean;
    isLoading: boolean;
    isLooping: boolean;
    isMuted: boolean;
    isPlaying: boolean;
    playableDurationMillis: number;
    positionMillis: number;
    progressUpdateMillis: number;
    rate: number;
    shouldCorrectPitch: boolean;
    shouldPlay: boolean;
    uri: string;
    volume: number;
}

export default function Music() {

    const navigation = useNavigation();

    const route = useRoute();

    const [currentTimer, setCurrentTimer] = useState<string>("00:00");

    const [soundObj, setSoundObj] = useState<any>(null);

    const [playbackObj, setPlaybackObj] = useState(null);

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', goBack);

        return () => {
            BackHandler.removeEventListener('hardwareBackPress', () => true);
        };
    });

    async function handleMusic() {
        if (!route.params.music) return;
        //primeira vez
        if (soundObj === null) {

            const playbackObj = new Audio.Sound();
            const status = await playbackObj.loadAsync(
                { uri: route.params.music },
                { shouldPlay: true }
            );
            return setPlaybackObj(playbackObj), setSoundObj(status);
        }

        // pause 
        if (soundObj.isLoaded && soundObj.isPlaying) {
            const status = await playbackObj.setStatusAsync({ shouldPlay: false });
            return setSoundObj(status);
        }

        // unpause
        if (soundObj.isLoaded && !soundObj.isPlaying) {
            const status = await playbackObj.setStatusAsync({ shouldPlay: true });
            
            return setSoundObj(status);
        }
        
    }

    function goBack() {
        if (!playbackObj) return navigation.goBack(), true;
        playbackObj.stopAsync();
        playbackObj.unloadAsync();
        navigation.goBack();
        return true;
    }

    return (
        <MusicView
            image={route.params.image}
            album={route.params.album}
            musicTitle={route.params.title}
            artist={route.params.artist}
            currentTimer={currentTimer}
            playDuration={soundObj?.playableDurationMillis}
            playPosition={soundObj?.positionMillis}
            isPlaying={soundObj?.isPlaying}
            handleMusic={handleMusic}
        />
    );
}