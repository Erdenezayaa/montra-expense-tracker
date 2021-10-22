import React from 'react';
import {View, Text} from 'react-native';
import LottieView from 'lottie-react-native';
import styles from '@app/styles';
import {SlideData} from '../index.data';

type Props = {
  item: SlideData;
  animRefs: React.RefObject<LottieView>[];
};

const slide1 = require('@app/assets/gain_control.json');
const slide2 = require('@app/assets/know_money.json');
const slide3 = require('@app/assets/planning_ahead.json');

function SlideItem(props: Props) {
  const {item, animRefs} = props;
  return (
    <View style={styles.slideContainer}>
      <View style={styles.slideItemWrapper}>
        {item.icon === 0 && (
          <LottieView ref={animRefs[0]} source={slide1} autoPlay />
        )}
        {item.icon === 1 && (
          <LottieView ref={animRefs[1]} source={slide2} autoPlay />
        )}
        {item.icon === 2 && (
          <LottieView ref={animRefs[2]} source={slide3} autoPlay />
        )}
      </View>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>
    </View>
  );
}

export default SlideItem;
