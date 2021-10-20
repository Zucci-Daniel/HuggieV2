
import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Dimensions,
    Platform
} from 'react-native';

export default function SnapScroll() {

    const cards = [
        { name: 'Card 1', level: 100 },
        { name: 'Card 2', level: 200 },
        { name: 'Card 3', level: 300 },
        { name: 'Card 4', level: 400 },
        { name: 'Card 5', level: 500 },
        { name: 'Card 6', level: 600 },
    ]

    const CardsView = () => {
        return cards.map((card) => <View style={styles.cardStyle} key={card.name + card.level}><Text>{card.name} | {card.level}</Text></View>)
    }

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.container}>
                <ScrollView
                    pagingEnabled
                    decelerationRate={0.7}
                    snapToInterval={CARD_HEIGHT + 10}
                    snapToAlignment="center"
                    contentContainerStyle={{ paddingHorizontal: Platform.OS === 'android' ? SPACING_HEIGHT : 0 }}
                    disableIntervalMomentum={true}
                    onScrollBeginDrag={()=>console.log('WORKING')}
                    onScrollEndDrag={()=>console.log('END')}
                    removeClippedSubviews={true}
                   
                >
                    <CardsView />
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

const CARD_WIDTH = Dimensions.get('window').width * 0.9;
const CARD_HEIGHT = Dimensions.get('window').height * 0.99;
const SPACING = Dimensions.get('window').width * -0.3 - 25;
const SPACING_HEIGHT = Dimensions.get('window').height * 0.4 - CARD_WIDTH;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    cardStyle: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        backgroundColor: 'blue',
        margin: 5
    }
})
