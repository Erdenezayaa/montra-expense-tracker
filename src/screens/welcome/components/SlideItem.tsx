import React from 'react';
import {View, Text} from 'react-native';
import LottieView from 'lottie-react-native';
import styles from '@app/styles';
import {SlideData} from '../index.data';
import {useTranslation} from 'react-i18next';

type Props = {
  item: SlideData;
  first: React.RefObject<LottieView>;
  second: React.RefObject<LottieView>;
  third: React.RefObject<LottieView>;
};

const slide1 = require('@app/assets/gain_control.json');
const slide2 = require('@app/assets/know_money.json');
const slide3 = require('@app/assets/planning_ahead.json');

function SlideItem(props: Props) {
  const {item, first, second, third} = props;
  const {t} = useTranslation();
  return (
    <View style={styles.slideContainer}>
      <View style={styles.slideItemWrapper}>
        {item.icon === 0 && <LottieView ref={first} source={slide1} autoPlay />}
        {item.icon === 1 && (
          <LottieView ref={second} source={slide2} autoPlay />
        )}
        {item.icon === 2 && <LottieView ref={third} source={slide3} autoPlay />}
      </View>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>
    </View>
  );
}

export default SlideItem;
