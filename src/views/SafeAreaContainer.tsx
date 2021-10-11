import React from 'react';
import {SafeAreaView} from 'react-native';
import styles from '@app/styles';

type Props = {
  children: JSX.Element;
};

function SafeAreaContainer(props: Props) {
  const {children} = props;
  return <SafeAreaView style={styles.safeArea}>{children}</SafeAreaView>;
}
export default SafeAreaContainer;
