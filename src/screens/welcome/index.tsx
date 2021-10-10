import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper';
import styles from '@app/styles';
import SlideItem from './components/SlideItem';
import {RootStackParamList} from '/routes/onboard';
import {data} from './index.data';

type WelcomeProps = {
  navigation: NativeStackScreenProps<
    RootStackParamList,
    'Welcome'
  >['navigation'];
};

function WelcomeScreen(props: WelcomeProps) {
  const {navigation} = props;
  const onPressSignup = () => {
    navigation.navigate('Signup');
  };
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
          <TouchableOpacity style={styles.signupButton} onPress={onPressSignup}>
            <Text style={styles.buttonTitle}>Sign Up</Text>
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
