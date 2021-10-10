import {StyleSheet} from 'react-native';
import {primary_text, secondary_text, soft_purple, violet} from './colors';
import {screen_height, screen_width} from './dimens';

let slideWidth = screen_width;
let slideHeight = screen_width;
if (screen_height - 350 < slideWidth) {
  slideHeight = screen_height - 350;
  slideWidth = slideHeight;
}

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
    width: screen_width,
  },
  slideIcon: {
    width: slideWidth,
    height: slideHeight,
    alignSelf: 'center',
  },
  activeDot: {
    width: 15,
    height: 15,
    marginLeft: 10,
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
    bottom: -20,
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
  headerContainer: {
    height: 100,
    flex: 1,
    backgroundColor: 'white',
    borderBottomWidth: 1,
  },
  headerTitle: {
    fontSize: 18,
    color: primary_text,
    fontWeight: '600',
    lineHeight: 22,
  },
  screenContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  formContainer: {
    marginTop: 30,
    marginHorizontal: 15,
    flex: 1,
  },
  textInput: {
    height: 55,
    borderRadius: 16,
    borderColor: '#F1F1FA',
    borderWidth: 1,
    paddingHorizontal: 12,
    fontSize: 16,
    marginTop: 20,
  },
  slideItemWrapper: {
    flex: 1,
  },
  scalingDotContainer: {
    height: 40,
  },
  scalingDotPosition: {
    bottom: 0,
  },
});

export {slideHeight, slideWidth};
export default styles;
