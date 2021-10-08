import {StyleSheet} from 'react-native';
import {primary_text, secondary_text, soft_purple, violet} from './colors';
import {screen_width} from './dimens';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    fontWeight: 'bold',
  },
  title: {
    color: primary_text,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 35,
    marginTop: 30,
  },
  subtitle: {
    fontWeight: '500',
    color: secondary_text,
    lineHeight: 19,
    fontSize: 16,
    marginHorizontal: 35,
    textAlign: 'center',
    marginTop: 15,
  },
  swiperContainer: {
    flex: 1,
  },
  buttonContainer: {
    justifyContent: 'flex-end',
    paddingBottom: 20,
    paddingHorizontal: 25,
  },
  slideContainer: {
    flex: 1,
  },
  slideIcon: {
    width: screen_width,
    height: screen_width,
    marginHorizontal: 35,
  },
  activeDot: {
    width: 16,
    height: 16,
    marginLeft: 5,
    borderRadius: 8,
    backgroundColor: violet,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 5,
    marginRight: 5,
    margin: 5,
    backgroundColor: soft_purple,
  },
  paginationStyle: {
    bottom: 0,
  },
  signupButton: {
    height: 60,
    marginTop: 25,
    backgroundColor: violet,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButton: {
    height: 60,
    backgroundColor: '#EEE5FF',
    borderRadius: 16,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTitle: {
    color: '#fcfcfc',
    fontSize: 18,
    lineHeight: 22,
    fontWeight: '600',
  },
  loginTitle: {
    color: '#7F3DFF',
    fontSize: 18,
    lineHeight: 22,
    fontWeight: '600',
  },
});

export default styles;
