import React from 'react';

// Components
import {Image, TouchableWithoutFeedback, View} from 'react-native';
import {Heading} from '../text/';
import {SpacedRow} from '~/shared/';

// Styles
import {
  Container,
  Header,
  Information,
  PriceText,
  AvailableText,
  CardLine,
} from './styles';

// Utils
import {formatStock, toMoney} from '~/utils/NumberFormatter';

// Types
import {ProductCardPropsInterface} from './types';

export default function ProductCardPresentational({
  name,
  stock,
  price,
  uri,
  isSelected,
  handlePress,
}: ProductCardPropsInterface) {
  const formattedStock = formatStock(stock);
  const stockText = `Disponível: ${formattedStock}`;
  const formattedPrice = toMoney(price);

  function renderIcon() {
    if (!isSelected) {
      return <View />;
    }
    return (
      <Image testID="check-icon" source={require('~/utils/icons/check.png')} />
    );
  }
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <Container isSelected={isSelected} testID="productCard">
        <Header>
          <Image
            source={{
              uri: uri,
              width: 64,
              height: 48,
            }}
          />
          <Information>
            <Heading type="H7">{name}</Heading>
            <PriceText type="H6">{formattedPrice}</PriceText>
          </Information>
        </Header>
        <CardLine />
        <SpacedRow>
          {renderIcon()}
          <AvailableText type="H12">{stockText}</AvailableText>
        </SpacedRow>
      </Container>
    </TouchableWithoutFeedback>
  );
}
