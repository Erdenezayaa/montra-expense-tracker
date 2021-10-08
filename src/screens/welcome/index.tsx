import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper';
import styles from '../../styles';
import SlideItem from './components/SlideItem';

export type SlideData = {
  title: string;
  subtitle: string;
  icon: number;
};

const data: SlideData[] = [
  {
    title: 'Gain total control of your money',
    subtitle: 'Become your own money manager and make every cent count',
    icon: 0,
  },
  {
    title: 'Know where your money goes',
    subtitle: `Track your transaction easily,
    with categories and financial report `,
    icon: 1,
  },
  {
    title: 'Planning ahead',
    subtitle: `Setup your budget for each category
    so you in control`,
    icon: 2,
  },
];

function WelcomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.swiperContainer}>
          <Swiper
            automaticallyAdjustContentInsets
            pagingEnabled
            loop={false}
            paginationStyle={styles.paginationStyle}
            activeDotStyle={styles.activeDot}
            dotStyle={styles.dot}
            horizontal>
            {data.map(item => (
              <SlideItem key={item.icon} item={item} />
            ))}
          </Swiper>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.signupButton}
            onPress={() => {
              console.log('pressed');
            }}>
            <Text style={styles.buttonTitle}>Sign up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => {
              console.log('pressed');
            }}>
            <Text style={styles.loginTitle}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default WelcomeScreen;
