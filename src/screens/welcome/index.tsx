import React from 'react';
import {View, TouchableOpacity, Text, Animated, FlatList} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ScalingDot} from 'react-native-animated-pagination-dots';
import styles from '@app/styles';
import SlideItem from './components/SlideItem';
import {RootStackParamList} from '@app/routes/onboard';
import {data} from './index.data';
import {soft_purple, violet} from '@app/styles/colors';
import SafeAreaContainer from '@app/views/SafeAreaContainer';

type Props = {
  navigation: NativeStackScreenProps<
    RootStackParamList,
    'Welcome'
  >['navigation'];
};

function WelcomeScreen(props: Props) {
  const {navigation} = props;
  const onPressSignup = () => {
    navigation.navigate('Signup');
  };
  const onPressLogin = () => {
    navigation.navigate('Login');
  };
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <SafeAreaContainer>
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
          <TouchableOpacity style={styles.loginButton} onPress={onPressLogin}>
            <Text style={styles.loginTitle}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaContainer>
  );
}

export default WelcomeScreen;
