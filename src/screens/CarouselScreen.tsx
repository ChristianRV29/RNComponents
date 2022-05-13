import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  ImageSourcePropType,
  Dimensions,
  View,
  Image,
  StyleSheet,
  Animated,
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import { useAnimation } from '~src/hooks/useAnimation';

const { height: windowHeight, width: windowWidth } = Dimensions.get('window');

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../assets/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../assets/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../assets/slide-3.png'),
  },
];

const CarouselScreen = ({ navigation }) => {
  const { goBack } = useNavigation();
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const { opacity, fadeIn, fadeOut } = useAnimation();

  const handleItems = (index: number) => {
    setActiveIndex(index);
    if (index === items.length - 1) {
      fadeIn();
    } else {
      fadeOut();
    }
  };

  const renderItem = (item: Slide) => {
    return (
      <View style={styles.slideItemContainer}>
        <Image source={item.img} style={styles.slideImageItem} />
        <Text style={styles.slideTitleItem}>{item.title}</Text>
        <Text style={styles.slideDescriptionItem}>{item.desc}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Carousel
        data={items}
        renderItem={({ item }) => renderItem(item)}
        sliderHeight={windowHeight}
        sliderWidth={windowWidth}
        itemWidth={windowWidth}
        windowSize={undefined}
        layout={'default'}
        onSnapToItem={index => handleItems(index)}
      />
      <View style={styles.optionsContainer}>
        <Pagination
          dotsLength={items.length}
          dotStyle={styles.dotStyle}
          activeDotIndex={activeIndex}
        />
        <Animated.View style={{ ...styles.buttonAnimated, opacity }}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => goBack()}
          >
            <Icon
              size={30}
              name={'arrow-back-circle-outline'}
              color={'white'}
            />
            <Text style={styles.buttonText}>Go back</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: 50,
  },
  slideItemContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 40,
    justifyContent: 'center',
  },
  slideImageItem: {
    width: 350,
    height: 400,
    resizeMode: 'center',
  },
  slideTitleItem: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#5856D6',
  },
  slideDescriptionItem: {
    fontSize: 16,
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#5856D6',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonAnimated: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: '#5856D6',
    width: 140,
    height: 50,
    marginHorizontal: 25,
    marginVertical: 10,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    marginHorizontal: 10,
    color: 'white',
    fontSize: 15,
  },
});

export default CarouselScreen;
