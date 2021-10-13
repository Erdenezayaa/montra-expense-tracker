import React from 'react';
import {Platform, SafeAreaView, StatusBar} from 'react-native';
import styles from '@app/styles';

type Props = {
  children: JSX.Element;
};

function SafeAreaContainer(props: Props) {
  const {children} = props;
  return (
    <SafeAreaView style={styles.safeArea}>
      {Platform.OS === 'android' && (
        <StatusBar backgroundColor="white" barStyle="dark-content" />
      )}
      {children}
    </SafeAreaView>
  );
}
export default SafeAreaContainer;
