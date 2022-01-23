import React from 'react';

// Components
import {Image, TouchableOpacity} from 'react-native';

// Styles
import {
  Container,
  QuantityContainer,
  TextInput,
  ImageContainer,
} from './styles';

// Types
import {ProductQuantityInterface} from './types';

export default function ProductQuantityPresentational({
  quantity,
  isAddDisabled = false,
  onAdd,
  onSubtract,
}: ProductQuantityInterface) {
  const isMinusDisabled = quantity === 0;

  function renderMinus() {
    if (isMinusDisabled) {
      return (
        <Image
          testID="disabledMinusIcon"
          source={require('~/utils/icons/disabledMinus.png')}
        />
      );
    }
    return (
      <TouchableOpacity onPress={onSubtract}>
        <ImageContainer>
          <Image
            testID="minusIcon"
            source={require('~/utils/icons/minus.png')}
          />
        </ImageContainer>
      </TouchableOpacity>
    );
  }

  function renderPlus() {
    if (isAddDisabled) {
      return (
        <Image
          testID="disabledPlusIcon"
          source={require('~/utils/icons/disabledPlus.png')}
        />
      );
    }
    return (
      <TouchableOpacity onPress={onAdd}>
        <ImageContainer>
          <Image testID="plusIcon" source={require('~/utils/icons/plus.png')} />
        </ImageContainer>
      </TouchableOpacity>
    );
  }

  return (
    <Container>
      {renderMinus()}
      <QuantityContainer>
        <TextInput keyboardType="number-pad" value={String(quantity)} />
      </QuantityContainer>
      {renderPlus()}
    </Container>
  );
}
