import React from 'react';
import {View, Text} from 'react-native';
import styles from '../../../styles';
import Slide1 from '../../../assets/slide1.svg';
import Slide2 from '../../../assets/slide2.svg';
import Slide3 from '../../../assets/slide3.svg';
import {SlideData} from '..';

type Props = {
  item: SlideData;
};

const slides = [
  <Slide1 style={styles.slideIcon} />,
  <Slide2 style={styles.slideIcon} />,
  <Slide3 style={styles.slideIcon} />,
];

function SlideItem(props: Props) {
  const {item} = props;
  return (
    <View style={styles.slideContainer}>
      {slides[item.icon]}
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>
    </View>
  );
}

export default SlideItem;
