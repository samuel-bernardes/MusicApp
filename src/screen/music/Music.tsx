import React, { useEffect, useState } from 'react';
import MusicView from './Music.view';
import { Audio } from 'expo-av';

import { useNavigation, useRoute } from "@react-navigation/native";
import useMusic from '../../contexts/music/useMusic';
import { ISoundStatus } from './Music.interface';

function Music() {

    const navigation = useNavigation();

    const route = useRoute();

    const { music } = useMusic();

    const [currentTimer, setCurrentTimer] = useState<number>(0);

    const [sound, setSound] = useState<Audio.Sound | null>(null);

    const [millis, setMillis] = useState(currentTimer);

    const [duration, setDuration] = useState<number>();

    const interval = React.useRef(null)

    const [status, setStatus] = useState<ISoundStatus>({
        isLoaded: false,
        isLoading: false,
        error: null,
        isPlaying: false
    });

    useEffect(() => {
        loadSound();
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
        if (millis === Math.round(duration / 1000) && sound) {
            /* sound.replayAsync();
            setStatus({
                ...status,
                isPlaying: true,
            }); */
        }
    }, [millis]);

    useEffect(() => {
        if (!status.isPlaying) {
            if (interval.current) clearInterval(interval.current)
            return;
        }
        interval.current = setInterval(() => {
            countDown();
        }, 1000)
        return () => clearInterval(interval.current);
    }, [status.isPlaying]);

    useEffect(() => {
        getDuration();
    }, [sound]);

    useEffect(() => {
        setMillis(currentTimer);
    }, [currentTimer]);

    async function loadSound() {
        await Audio.requestPermissionsAsync();
        const { sound } = await Audio.Sound.createAsync(
            { uri: music.music },
            { shouldPlay: false },
        );;
        setStatus(status);
        setSound(sound);
    }

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
        } catch (error) {
            setStatus({ ...status, error });
        }
    }

    async function getDuration() {
        if (sound) {

            let localStatus: any = await sound.getStatusAsync();

            setDuration(localStatus?.durationMillis);
        }
    }

    return (
        <MusicView
            image={music.image}
            album={music.album}
            musicTitle={music.title}
            artist={music.artist}
            currentTimer={currentTimer}
            totalTimer={Math.round(duration / 1000)}
            isPlaying={status?.isPlaying}
            currentMillis={millis}
            setSongPosition={setPosition}
            setCurrentTimer={setCurrentTimer}
            handleMusic={togglePlayPause}
        />
    );
};

export default Music;