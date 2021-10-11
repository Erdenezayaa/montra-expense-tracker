import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from '@app/styles';
import Header from '@app/views/Header';
import GoogleIcon from '@app/assets/google_logo.svg';
import SafeAreaContainer from '@app/views/SafeAreaContainer';

export default function SignupScreen() {
  return (
    <SafeAreaContainer>
      <View style={styles.screenContainer}>
        <Header title="Sign Up" />
        <View style={styles.formContainer}>
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
          <TouchableOpacity style={styles.signupButton}>
            <Text style={styles.buttonTitle}>Sign Up</Text>
          </TouchableOpacity>
          <Text style={styles.orWith}>Or with</Text>
          <TouchableOpacity style={styles.neutralButton}>
            <View style={styles.horizontalRow}>
              <GoogleIcon width={32} height={32} />
              <Text style={styles.neutralBtnTitle}>Sign Up with Google</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.loginRow}>
            <Text style={styles.loginDesc}>Already have an account?</Text>
            <TouchableOpacity>
              <Text style={styles.loginBtn}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text />
      </View>
    </SafeAreaContainer>
  );
}
