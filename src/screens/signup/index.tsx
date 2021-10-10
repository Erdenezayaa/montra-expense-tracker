import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from '@app/styles';

export default function SignupScreen() {
  return (
    <View style={styles.screenContainer}>
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
      </View>
      <Text />
    </View>
  );
}
