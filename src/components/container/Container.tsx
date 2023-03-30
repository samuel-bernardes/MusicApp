import React from 'react';

import { SafeAreaView } from 'react-native';

import Styles from './Container.style';

interface IContainer {
    children: JSX.Element | JSX.Element[],
    color: string
}

export default function Container({ children, color }: IContainer) {

    const classes = Styles;

    return (
        <SafeAreaView style={[classes.container, { backgroundColor: color }]}>
            {children}
        </SafeAreaView>
    );
}