import React from 'react';

// Components
import {Image, TouchableWithoutFeedback} from 'react-native';
import {Heading} from '../text/';
import {Line} from '~/shared/';
import {ProductQuantity} from './components';

// Styles
import {
  Container,
  Header,
  Information,
  OptionsContainer,
  PriceText,
  RemoveText,
} from './styles';

// Utils
import {toMoney} from '~/utils/NumberFormatter';

// Types
import {CartProductCardPropsInterface} from './types';

export default function CartProductCardPresentational({
  id,
  name,
  stock,
  price,
  uri,
  quantity,
  onAdd,
  onSubtract,
  onRemove,
}: CartProductCardPropsInterface) {
  const totalValue = quantity * price;
  const formattedTotal = toMoney(totalValue);
  const isAddDisabled = quantity >= stock;
  return (
    <Container testID="cartProductCard">
      <Header>
        <Information>
          <Heading type="H9">{name}</Heading>
          <PriceText type="H5">{formattedTotal}</PriceText>
        </Information>
        <Image
          source={{
            uri: uri,
            width: 128,
            height: 96,
          }}
        />
      </Header>
      <Line />
      <OptionsContainer>
        <TouchableWithoutFeedback onPress={() => onRemove(id)}>
          <RemoveText type="H9">Remover</RemoveText>
        </TouchableWithoutFeedback>
        <ProductQuantity
          id={id}
          quantity={quantity}
          isAddDisabled={isAddDisabled}
          onAdd={onAdd}
          onSubtract={onSubtract}
        />
      </OptionsContainer>
    </Container>
  );
}
