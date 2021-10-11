import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import BackIcon from '@app/assets/back_icon.svg';
import styles from '@app/styles';

type HeaderProps = {
  title: string;
};

export default function Header(props: HeaderProps) {
  const {title} = props;
  const navigation = useNavigation();
  const onGoBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerLeft}>
        <TouchableOpacity onPress={onGoBack} style={styles.headerLeftTouchable}>
          <BackIcon width={32} height={32} />
        </TouchableOpacity>
      </View>
      <View style={styles.headerCenter}>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>
      <View style={styles.headerRight} />
    </View>
  );
}
