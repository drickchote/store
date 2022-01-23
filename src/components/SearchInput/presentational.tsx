import React from 'react';
import {Image, TextInput} from 'react-native';
import {SpacedRow} from '../../shared/styles';
import {Container} from './styles';
import {SearchInputProps} from './types';

export default function SearchInputPresentational({
  onChangeText,
}: SearchInputProps) {
  return (
    <Container>
      <SpacedRow>
        <TextInput
          onChangeText={onChangeText}
          placeholder="Pesquisar produtos..."
        />
        <Image source={require('../../utils/icons/search.png')} />
      </SpacedRow>
    </Container>
  );
}
