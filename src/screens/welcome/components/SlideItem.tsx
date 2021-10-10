import React from 'react';
import {View, Text} from 'react-native';
import styles, {slideHeight, slideWidth} from '@app/styles';
import Slide1 from '@app/assets/slide1.svg';
import Slide2 from '@app/assets/slide2.svg';
import Slide3 from '@app/assets/slide3.svg';
import {SlideData} from '../index.data';

type Props = {
  item: SlideData;
};

const slides = [
  <Slide1 width={slideWidth} height={slideHeight} style={styles.slideIcon} />,
  <Slide2 width={slideWidth} height={slideHeight} style={styles.slideIcon} />,
  <Slide3 width={slideWidth} height={slideHeight} style={styles.slideIcon} />,
];

function SlideItem(props: Props) {
  const {item} = props;
  return (
    <View style={styles.slideContainer}>
      <View style={{flex: 1, marginBottom: 20}}>{slides[item.icon]}</View>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>
    </View>
  );
}

export default SlideItem;
