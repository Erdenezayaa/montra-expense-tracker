import React from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import styles from '@app/styles';
import Header from '@app/views/Header';
import GoogleIcon from '@app/assets/google_logo.svg';
import SafeAreaContainer from '@app/views/SafeAreaContainer';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@app/routes/onboard';
import Button from '@app/views/Button';

type Props = {
  navigation: NativeStackScreenProps<RootStackParamList, 'Login'>['navigation'];
};

export default function LoginScreen(props: Props) {
  const {navigation} = props;
  const onSignupPress = () => {
    navigation.navigate('Signup');
  };
  return (
    <SafeAreaContainer>
      <View style={styles.screenContainer}>
        <Header title="Login" />
        <View style={styles.formContainer}>
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
          <Button title="Login" onPress={() => {}} />
          <Text style={styles.orWith}>Or with</Text>
          <TouchableOpacity style={styles.neutralButton}>
            <View style={styles.horizontalRow}>
              <GoogleIcon width={32} height={32} />
              <Text style={styles.neutralBtnTitle}>Login with Google</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.forgotPasswordBtn}>Forgot Password?</Text>
          </TouchableOpacity>
          <View style={styles.loginRow}>
            <Text style={styles.loginDesc}>Don't have an account yet?</Text>
            <TouchableOpacity onPress={onSignupPress}>
              <Text style={styles.loginBtn}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaContainer>
  );
}
