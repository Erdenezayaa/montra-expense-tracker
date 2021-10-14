import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@app/routes/onboard';
import SafeAreaContainer from '@app/views/SafeAreaContainer';
import Header from '@app/views/Header';
import styles from '@app/styles';
import Button from '@app/views/Button';
import {dark_text} from '@app/styles/colors';

type Props = {
  navigation: NativeStackScreenProps<
    RootStackParamList,
    'Verification'
  >['navigation'];
};

export default function VerificationScreen(props: Props) {
  const {navigation} = props;
  const [extraPadding, setExtraPadding] = useState(0);
  const codeInputRef = useRef<TextInput>(null);
  const mounted = useRef(false);
  const onVerifyClick = () => {
    navigation.navigate('Login');
  };
  return (
    <SafeAreaContainer>
      <View style={styles.container}>
        <Header title="Verification" />
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'position' : undefined}
          keyboardVerticalOffset={extraPadding}
          style={styles.containerBottom}>
          <Text style={styles.verificationPrompt}>
            Enter your {'\n'}Verification Code
          </Text>
          <TextInput
            ref={codeInputRef}
            placeholder="* * * * * *"
            placeholderTextColor={dark_text}
            keyboardType="number-pad"
            returnKeyType="done"
            onLayout={() => {
              setTimeout(() => {
                if (mounted.current === false) {
                  codeInputRef.current?.focus();
                  mounted.current = true;
                }
                if (Platform.OS === 'ios') {
                  setExtraPadding(60);
                }
              }, 300);
            }}
            maxLength={6}
            style={styles.codeInput}
          />
          <Text style={styles.verificationDesc}>
            We send verification code to your email{' '}
            <Text style={styles.verificationDescAccent}>
              brajaoma*****@gmail.com.
            </Text>{' '}
            You can check your inbox.
          </Text>
          <TouchableOpacity>
            <Text style={styles.sendAgainText}>
              I didn’t received the code? Send again
            </Text>
          </TouchableOpacity>
          <Button title="Verify" onPress={onVerifyClick} />
        </KeyboardAvoidingView>
      </View>
    </SafeAreaContainer>
  );
}
