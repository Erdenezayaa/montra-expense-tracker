import React, {useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import styles from '@app/styles';
import Header from '@app/views/Header';
import GoogleIcon from '@app/assets/google_logo.svg';
import SafeAreaContainer from '@app/views/SafeAreaContainer';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@app/routes/onboard';
import {useAppDispatch, useAppSelector} from '@app/redux/hooks';
import {createMetaSelector} from '@app/redux/metadata/selectors';
import * as CoreSelectors from '@app/redux/core/selectors';
import * as CoreActions from '@app/redux/core/actions';
import {clearMetaData} from '@app/redux/metadata/actions';
import Button from '@app/views/Button';

const signupMetaSelector = createMetaSelector(CoreActions.signUp);

type Props = {
  navigation: NativeStackScreenProps<
    RootStackParamList,
    'Signup'
  >['navigation'];
};

export default function SignupScreen(props: Props) {
  const {navigation} = props;
  const dispatch = useAppDispatch();
  const signupMeta = useAppSelector(signupMetaSelector);
  const signupResponse = useAppSelector(CoreSelectors.signupResponse);
  console.log(signupResponse);
  const onLoginPress = () => {
    navigation.navigate('Login');
  };
  const onSignupPress = () => {
    dispatch(
      CoreActions.signUp({
        name: 'John',
        email: 'johndoe@gmail.com',
        password: '12345678',
      }),
    );
  };
  useEffect(() => {
    if (signupMeta.loaded && signupMeta.pending === false) {
      navigation.navigate('Verification');
    }
  }, [signupMeta, navigation]);
  useEffect(() => {
    return () => {
      dispatch(CoreActions.signupReset());
      dispatch(clearMetaData(CoreActions.signUp.typePrefix));
    };
  }, [dispatch]);
  return (
    <SafeAreaContainer>
      <View style={styles.screenContainer}>
        <Header title="Sign Up" />
        <KeyboardAvoidingView behavior="padding" style={styles.formContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Name"
            autoCapitalize="none"
            placeholderTextColor="#91919F"
          />
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            autoCapitalize="none"
            keyboardType="email-address"
            placeholderTextColor="#91919F"
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            autoCapitalize="none"
            secureTextEntry={true}
            placeholderTextColor="#91919F"
          />
          <TextInput
            style={styles.textInput}
            placeholder="Confirm Password"
            autoCapitalize="none"
            secureTextEntry={true}
            placeholderTextColor="#91919F"
          />
          <Button
            title="Sign Up"
            loading={signupMeta.pending}
            onPress={onSignupPress}
          />
          <Text style={styles.orWith}>Or with</Text>
          <TouchableOpacity style={styles.neutralButton}>
            <View style={styles.horizontalRow}>
              <GoogleIcon width={32} height={32} />
              <Text style={styles.neutralBtnTitle}>Sign Up with Google</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.loginRow}>
            <Text style={styles.loginDesc}>Already have an account?</Text>
            <TouchableOpacity onPress={onLoginPress}>
              <Text style={styles.loginBtn}>Login</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
        <Text />
      </View>
    </SafeAreaContainer>
  );
}
