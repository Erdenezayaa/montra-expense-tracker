import React from 'react';
import {View, TouchableOpacity, Text, Animated, FlatList} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScalingDot} from 'react-native-animated-pagination-dots';
import styles from '@app/styles';
import SlideItem from './components/SlideItem';
import {RootStackParamList} from '/routes/onboard';
import {data} from './index.data';
import {soft_purple, violet} from '@app/styles/colors';

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
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.swiperContainer}>
          <FlatList
            data={data}
            horizontal
            decelerationRate={'normal'}
            scrollEventThrottle={16}
            pagingEnabled={true}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],
              {
                useNativeDriver: false,
              },
            )}
            renderItem={({item}) => <SlideItem key={item.icon} item={item} />}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.scalingDotContainer}>
          <ScalingDot
            scrollX={scrollX}
            data={data}
            inActiveDotOpacity={1}
            activeDotScale={1.3}
            containerStyle={styles.scalingDotPosition}
            dotStyle={styles.activeDot}
            activeDotColor={violet}
            inActiveDotColor={soft_purple}
          />
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
