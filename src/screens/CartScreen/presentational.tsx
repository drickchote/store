import React from 'react';

// Components
import {FlatList} from 'react-native';
import {ActionButton, CartProductCard, Heading} from '~/components';

// Styles
import {Screen, Total} from './styles';

// Types
import {ProductCartProps} from '~/hooks/Cart/types';
import {CartScreenPresentationalInterface} from './types';

// Utils
import {toMoney} from '~/utils/NumberFormatter';

// Screen
import {EmptyCartScreen} from '..';

export default function CartScreenScreenPresentational({
  products,
  cartTotalPrice,
}: CartScreenPresentationalInterface) {
  if (products.length === 0) {
    return <EmptyCartScreen />;
  }

  const formattedTotal = toMoney(cartTotalPrice);

  function renderCartProduct({item}: {item: ProductCartProps}) {
    const {id, name, stock, price, quantity} = item;
    const uri = 'https://picsum.photos/640/480/';
    const productPrice = Number(price);

    return (
      <CartProductCard
        id={id}
        name={name}
        price={productPrice}
        stock={stock}
        uri={uri}
        quantity={quantity}
      />
    );
  }
  // @TODO create the next
  return (
    <Screen>
      <FlatList
        data={products}
        renderItem={renderCartProduct}
        keyExtractor={item => item.id}
      />
      <Total>
        <Heading type="H2">Total:</Heading>
        <Heading type="H3">{formattedTotal}</Heading>
      </Total>

      <ActionButton name="Finalizar" isDisabled={true} onPress={() => {}} />
    </Screen>
  );
}
