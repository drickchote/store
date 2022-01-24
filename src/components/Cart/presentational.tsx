import React from 'react';
import {Image, View} from 'react-native';
import {formatCartNumber} from '~/utils/NumberFormatter';
import {CartText, TextContainer, ImageContainer} from './styles';
import {CartPropsInterface} from './types';

export default function CartPresentaional({quantity = 0}: CartPropsInterface) {
  const formattedQuantity = formatCartNumber(quantity);

  return (
    <View>
      <TextContainer testID="cartQuantity" quantity={quantity}>
        <CartText type="H15">{formattedQuantity}</CartText>
      </TextContainer>
      <ImageContainer>
        <Image source={require('~/assets/icons/cart.png')} />
      </ImageContainer>
    </View>
  );
}
