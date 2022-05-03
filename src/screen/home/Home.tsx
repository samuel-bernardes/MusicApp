import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, Text, TouchableOpacity, View } from 'react-native';
import { Audio } from 'expo-av';

import HomeView from './Home.view';

import spotify_search from '../../service/spotifySearch/spotifySearch';

import Styles from './Home.style';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';
import Header from '../../components/header/Header';
import useProfile from '../../contexts/profile/useProfile';

interface IList {
    songs: Array<ISongs>;
    offset: number;
    isFetching: boolean;
    isEmpty: boolean;
    spotify_token: any;
    isTokenFetching: boolean;
}

export interface ISongs {
    album: string;
    artist: string;
    id: string;
    imageUri: string;
    is_playable: any;
    preview_url: any;
    title: string;
}

export default function Home() {

    const classes = Styles;

    const route = useRoute();

    const token = route.params.token;

    const [text, setText] = useState<string>()
    const [songs, setSongs] = useState<ISongs[]>()
    const [loading, setLoading] = useState<boolean>(true)
    const [list, setList] = useState<IList>({
        songs: [],
        offset: 0,
        isFetching: false,
        isEmpty: false,
        spotify_token: null,
        isTokenFetching: false
    })
    const [sound, setSound] = useState<any>();
    const [songId, setSongId] = useState<string>("");
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const {profile, setNewProfile} = useProfile();

    useEffect(() => {
        loadProfile();
    }, [])

    useEffect(() => {
        return sound
            ? () => {
                console.log('Unloading Sound');
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);

    useEffect(() => {
        if (!text) {
            setSongs([])
        }
    }, [text])

    useEffect(() => {
        console.log(songId)
    }, [songId])


    function handleSearchChange(text) {
        setText(text);
    }

    async function loadProfile() {
        const response = await fetch(`https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=${token}`);
        const userinfo = await response.json();
        setNewProfile(userinfo);
        setLoading(false);
    }

    async function playSound(uri: string) {

        const { sound } = await Audio.Sound.createAsync(
            { uri: uri }
        );

        setSound(sound);
        setSongId(songId);
        await sound.playAsync();

    }

    async function loadNextPage() {

        const localList = list;

        if (localList.isFetching || localList.isEmpty) {
            return;
        }

        localList.isFetching = true;

        const newSongs = await spotify_search({
            offset: list.offset,
            limit: 10,
            q: text
        })

        setSongs(newSongs);

        console.log("novos sons", songs)

        if (newSongs.length === 0) {
            console.log('no songs found');
            localList.isEmpty = true;
            setList(localList);
        }

        localList.isFetching = false;
        localList.songs[localList.songs + newSongs],
            localList.offset = localList.offset + 20

        setList(localList)

    }

    function iconFunction() {
        const localList = list;

        localList.isEmpty = false;
        localList.offset = 0;
        localList.songs = [];
        setList(localList);

        loadNextPage();
    }

    function renderList({ item }: { item: ISongs }) {
        return (
            <TouchableOpacity onPress={() => playSound(item.preview_url)}>
                <View style={classes.musicBox}>
                    <Image
                        style={classes.image}
                        source={{ uri: item.imageUri }}
                    />
                    <View style={{ justifyContent: 'space-around' }}>
                        <Text style={classes.titleMusic}>{item.title}</Text>
                        <Text style={[classes.titleMusic, { fontSize: 12, fontWeight: '600' }]}>{item.artist}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    /*     async function refreshToken() {
        const localList = list;
        localList.isTokenFetching = true;
        setList(localList);
 
        const newToken = await spotify_token();
 
        localList.spotify_token = newToken,
            localList.isFetching = false
        setList(localList);
    } */

    function bannerVisible() {
        if (!songs) return;

        if (songs.length > 0) return "none"; else return "flex";

    }

    return (
        !loading ? (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#27153E' }}>
                <Header />
                <HomeView
                    text={text}
                    data={songs}
                    bannerVisible={bannerVisible()}
                    iconFunction={iconFunction}
                    renderList={renderList}
                    handleSearchChange={handleSearchChange}
                />
            </SafeAreaView>
        ) : (
            <View style={{ flex: 1, justifyContent: "center", backgroundColor: '#27153E' }}>
                <ActivityIndicator size={100} color="#fafafa" />
            </View>
        )
    );
}