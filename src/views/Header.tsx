import React from 'react';
import {View, Text} from 'react-native';
import BackIcon from '@app/assets/back_icon.svg';
import styles from '@app/styles';

type HeaderProps = {
  title: string;
};

export default function Header(props: HeaderProps) {
  const {title} = props;
  return (
    <View style={styles.headerContainer}>
      <BackIcon width={32} height={32} />
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
}
