import React from 'react';
import { Searchbar } from 'react-native-paper';

import Styles from './Search.style';

interface ISearch {
    text: string;
    iconFunction: () => void;
    handleSearchChange: (text: string) => void;
}

export default function Search(props: ISearch) {

    const { text, handleSearchChange, iconFunction } = props;

    const classes = Styles;

    return (

        <Searchbar
            placeholder="Pesquisar"
            style={{ backgroundColor: "#FFFFFF", width: '95%', alignSelf: 'center' }}
            autoComplete={null}
            onChangeText={handleSearchChange}
            onIconPress={iconFunction}
            iconColor="#3C2D51"
            value={text}
        />

    );
}