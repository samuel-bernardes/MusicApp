import React, { useEffect, useState } from 'react';
import MusicView from './Music.view';
import { Audio, AVPlaybackStatus } from 'expo-av';

import { useNavigation, useRoute } from "@react-navigation/native";
import { BackHandler } from 'react-native';
import useMusic from '../../contexts/music/useMusic';

interface ISoundStatus {
    isLoaded: boolean,
    isLoading: boolean,
    error: any,
    isPlaying: boolean,
    positionMillis: number,
    durationMillis: number
}

export default function Music() {

    const navigation = useNavigation();

    const route = useRoute();

    const { music } = useMusic();

    const [currentTimer, setCurrentTimer] = useState<number>(0);

    const [sound, setSound] = useState<Audio.Sound | null>(null);

    const [millis, setMillis] = useState(currentTimer);

    const interval = React.useRef(null)

    const [status, setStatus] = useState<ISoundStatus>({
        isLoaded: false,
        isLoading: false,
        error: null,
        isPlaying: false,
        positionMillis: 0,
        durationMillis: 0,
    });

    useEffect(() => {
        async function loadSound() {
            const { sound } = await Audio.Sound.createAsync(
                { uri: music.music },
                { shouldPlay: false }
            );
            setSound(sound);
            setCurrentTimer(status.positionMillis);
        }
        loadSound();

        return () => {
            if (status.isPlaying && sound) {
                sound.stopAsync();
            }
            if (sound) {
                sound.unloadAsync();
            }
        };
    }, []);

    useEffect(() => {
        const unsubscribe = navigation.addListener('beforeRemove', async () => {
            if (sound) {
                await sound.stopAsync();
                await sound.unloadAsync();
            }
        });
        return unsubscribe;
    }, [navigation, sound]);

    useEffect(() => {
        if (status.positionMillis === status.durationMillis && sound) {
            sound.replayAsync();
            setStatus({
                ...status,
                isPlaying: true,
            });
        }
    }, [status.positionMillis, status.durationMillis]);

    useEffect(() => {
        if (status.positionMillis === status.durationMillis && sound) {
            sound.replayAsync();
            setStatus({
                ...status,
                isPlaying: true,
            });
        }
    }, [status.positionMillis, status.durationMillis]);

    function countDown() {
        setMillis((time) => {
            if (time === 30) {
                clearInterval(interval.current)
                setMillis(0);
                setCurrentTimer(0);
                return time;
            }
            const timeLeft = time + 1;
            return timeLeft;
        })
    }

    useEffect(() => {
        if (!status.isPlaying) {
            if (interval.current) clearInterval(interval.current)
            return;
        }
        interval.current = setInterval(() => {
            countDown();
        }, 1000)
        return () => clearInterval(interval.current);
    }, [status.isPlaying])

    useEffect(() => {
        setMillis(currentTimer);
    }, [currentTimer])

    function togglePlayPause() {
        if (!sound) {
            return;
        }

        if (status.isPlaying) {
            sound.pauseAsync();
            setStatus({
                ...status,
                isPlaying: false,
            });
        } else {
            sound.playAsync();

            setStatus({
                ...status,
                isPlaying: true,
            });
        }
    }

    async function setPosition(positionMillis) {
        if (!sound) {
            return;
        }

        try {
            await sound.setPositionAsync(positionMillis * 1000);
            setCurrentTimer(positionMillis);
            setStatus({
                ...status,
                positionMillis: positionMillis * 1000,
            });
        } catch (error) {
            setStatus({ ...status, error });
        }
    }

    return (
        <MusicView
            image={music.image}
            album={music.album}
            musicTitle={music.title}
            artist={music.artist}
            currentTimer={currentTimer}
            totalTimer={status?.durationMillis}
            isPlaying={status?.isPlaying}
            currentMillis={millis}
            setSongPosition={setPosition}
            setCurrentTimer={setCurrentTimer}
            handleMusic={togglePlayPause}
        />
    );
}