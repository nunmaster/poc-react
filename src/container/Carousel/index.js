import React, { Component } from 'react';
import { View, ScrollView, Text, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from './styles/SliderEntry.style';
import SliderEntry from './components/SliderEntry';
import styles, { colors } from './styles/index.style';
import { ENTRIES1, ENTRIES2 } from './static/entries';

const SLIDER_1_FIRST_ITEM = 1;

export default class example extends Component {

    constructor(props) {
        super(props);
        this.state = {
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
            slider1Ref: null
        };
    }

    _renderItem({ item, index }) {
        return (
            <SliderEntry
                data={item}
                even={(index + 1) % 2 === 0}
            />
        );
    }

    _renderItemWithParallax({ item, index }, parallaxProps) {
        return (
            <SliderEntry
                data={item}
                even={(index + 1) % 2 === 0}
                parallax
                parallaxProps={parallaxProps}
            />
        );
    }

    get example1() {
        const { slider1ActiveSlide, slider1Ref } = this.state;

        return (
            <View style={styles.exampleContainer}>
                <Text style={styles.title}>Example 1</Text>
                <Text style={styles.subtitle}>
                    No momentum | Loop | Autoplay | Parallax | Scale | Opacity | Pagination with tappable dots
                </Text>
                <Carousel
                    ref={(c) => { if (!this.state.slider1Ref) { this.setState({ slider1Ref: c }); } }}
                    data={ENTRIES1}
                    renderItem={this._renderItemWithParallax}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                    hasParallaxImages
                    firstItem={SLIDER_1_FIRST_ITEM}
                    inactiveSlideScale={0.94}
                    inactiveSlideOpacity={0.7}
                    enableMomentum={false}
                    containerCustomStyle={styles.slider}
                    contentContainerCustomStyle={styles.sliderContentContainer}
                    loop
                    loopClonesPerSide={2}
                    autoplay
                    autoplayDelay={500}
                    autoplayInterval={3000}
                    onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index })}
                />
                <Pagination
                    dotsLength={ENTRIES1.length}
                    activeDotIndex={slider1ActiveSlide}
                    containerStyle={styles.paginationContainer}
                    dotColor={'rgba(255, 255, 255, 0.92)'}
                    dotStyle={styles.paginationDot}
                    inactiveDotColor={colors.black}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                    carouselRef={slider1Ref}
                    tappableDots={!!slider1Ref}
                />
            </View>
        );
    }

    get example2() {
        return (
            <View style={styles.exampleContainer}>
                <Text style={styles.title}>Example 2</Text>
                <Text style={styles.subtitle}>Momentum | Left-aligned</Text>
                <Carousel
                    data={ENTRIES2}
                    renderItem={this._renderItem}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                    inactiveSlideScale={1}
                    inactiveSlideOpacity={1}
                    enableMomentum
                    activeSlideAlignment={'start'}
                    containerCustomStyle={styles.slider}
                    contentContainerCustomStyle={styles.sliderContentContainer}
                    removeClippedSubviews={false}
                />
            </View>
        );
    }

    get gradient() {
        return (
            <LinearGradient
                colors={[colors.background1, colors.background2]}
                start={{ x: 1, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={styles.gradient}
            />
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    translucent
                    backgroundColor={'rgba(0, 0, 0, 0.3)'}
                    barStyle={'light-content'}
                />
                {this.gradient}
                <ScrollView
                    style={styles.scrollview}
                    contentContainerStyle={styles.scrollviewContentContainer}
                    indicatorStyle={'white'}
                    scrollEventThrottle={200}
                    directionalLockEnabled
                >
                    {this.example1}
                    {this.example2}
                </ScrollView>
            </View>
        );
    }
}
