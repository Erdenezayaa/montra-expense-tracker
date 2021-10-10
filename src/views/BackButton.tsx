import React from 'react';
import {TouchableOpacity} from 'react-native';
import BackIcon from '@app/assets/back_icon.svg';

type BackButtonProps = {
  onPress: () => void;
};

export default function BackButton(props: BackButtonProps) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <BackIcon width={32} height={32} />
    </TouchableOpacity>
  );
}
