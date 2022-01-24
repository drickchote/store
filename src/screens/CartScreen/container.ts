import React from 'react';
import {useCart} from '~/hooks';
import CartScreenScreenPresentational from './presentational';

export function CartScreen() {
  const {cartProducts: products, cartTotalPrice} = useCart();

  return React.createElement(CartScreenScreenPresentational, {
    products,
    cartTotalPrice,
  });
}
