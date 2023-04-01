import React from 'react';

import { Image, Text, TouchableOpacity } from 'react-native';

import Styles from './Recommendations.style';

interface IRecommendations {
    titleMusic: string,
    imageMusic: string
}

export default function Recommendations(props: IRecommendations) {

    const { titleMusic, imageMusic } = props;

    const classes = Styles;

    return (
        <TouchableOpacity style={classes.container}>
            <Image
                style={classes.image}
                source={{ uri: imageMusic }}
                resizeMode="contain"
            />

            <Text style={classes.title}>{titleMusic}</Text>

        </TouchableOpacity>
    );
}