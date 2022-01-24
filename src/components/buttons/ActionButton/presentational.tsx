import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Container, Text} from './styles';
import {ActionButtonInterface} from './types';

export default function ActionButtonPresentational({
  name,
  isDisabled = false,
  onPress,
}: ActionButtonInterface) {
  return (
    <TouchableOpacity onPress={onPress} disabled={isDisabled}>
      <Container isDisabled={isDisabled} testID="actionButton">
        <Text type="H2">{name}</Text>
      </Container>
    </TouchableOpacity>
  );
}
