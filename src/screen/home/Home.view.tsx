import React from 'react';

import { Text, View, FlatList, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import Container from '../../components/container/Container';
import Recommendations from '../../components/recommendations/Recommendations';
import Search from '../../components/search/Search';
import { colors } from '../../theme/colors';
import Styles from './Home.style';

interface ISearch {
    text: string;
    data: any;
    renderList: any;
    bannerVisible: "none" | "flex";
    iconFunction: () => void;
    handleSearchChange: (text: string) => void;
}

export default function HomeView(props: ISearch) {

    const { text, data, renderList, bannerVisible, handleSearchChange, iconFunction } = props;

    const classes = Styles;

    return (
        <Container color={colors.brand.primary} >
            <StatusBar hidden={true} />
            <Search text={text} handleSearchChange={handleSearchChange} iconFunction={iconFunction} />

            <View style={[classes.banner, { display: bannerVisible }]}>
                <Text style={classes.bannerText}>
                    Ouça suas músicas favoritas sem anúncios!
                </Text>
                <TouchableOpacity style={classes.button}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Premium</Text>
                </TouchableOpacity>
            </View>

            {data?.length == 0 && (
                <View style={classes.recomedationBox} >
                    <Text style={classes.bannerText}>Recomendados</Text>
                    <ScrollView style={classes.recommendationsContainer} horizontal={true} showsHorizontalScrollIndicator={false}>


                        <Recommendations titleMusic={'Samuel'} imageMusic={'http://1.bp.blogspot.com/-cae5mWLe4Jg/VazohfjE8BI/AAAAAAAA21o/3c6VBxw07B8/s1600/daniblackdiluviocapa.png'} />
                        <Recommendations titleMusic={'Mc John'} imageMusic={'http://s.glbimg.com/jo/g1/f/original/blog/e2f70731-9075-4754-baff-2a023c75e31f_mcguimesoufilhodalua.jpg'} />
                    </ScrollView>
                </View>
            )}

            <FlatList
                style={{ overflow: "hidden", marginBottom: 20, marginTop: 4 }}
                data={data}
                renderItem={renderList}
            />

        </Container>
    );
}