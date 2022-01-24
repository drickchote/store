import React from 'react';

// Components
import {Image, TouchableOpacity} from 'react-native';

// Hooks
import {useCart} from '~/hooks';

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
  id,
  quantity,
  isAddDisabled = false,
}: ProductQuantityInterface) {
  const isMinusDisabled = quantity === 0;

  const {incrementQuantity, decrementQuantity, setProductQuantity} = useCart();

  function renderMinus() {
    if (isMinusDisabled) {
      return (
        <Image
          testID="disabledMinusIcon"
          source={require('~/assets/icons/disabledMinus.png')}
        />
      );
    }
    return (
      <TouchableOpacity onPress={() => decrementQuantity(id)}>
        <ImageContainer>
          <Image
            testID="minusIcon"
            source={require('~/assets/icons/minus.png')}
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
          source={require('~/assets/icons/disabledPlus.png')}
        />
      );
    }
    return (
      <TouchableOpacity onPress={() => incrementQuantity(id)}>
        <ImageContainer>
          <Image
            testID="plusIcon"
            source={require('~/assets/icons/plus.png')}
          />
        </ImageContainer>
      </TouchableOpacity>
    );
  }

  return (
    <Container>
      {renderMinus()}
      <QuantityContainer>
        <TextInput
          keyboardType="number-pad"
          value={String(quantity)}
          onChangeText={value => setProductQuantity(id, Number(value))}
        />
      </QuantityContainer>
      {renderPlus()}
    </Container>
  );
}
