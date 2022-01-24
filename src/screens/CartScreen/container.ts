import React from 'react';
import {useCart} from '~/hooks';
import CartScreenScreenPresentational from './presentational';

export function CartScreen() {
  const {
    cartProducts: products,
    cartTotalPrice,
    removeProduct,
    incrementQuantity,
    decrementQuantity,
  } = useCart();

  function handleRemove(id: string) {
    removeProduct(id);
  }

  function handleAdd(id: string) {
    incrementQuantity(id);
  }

  function handleSubtract(id: string) {
    decrementQuantity(id);
  }

  return React.createElement(CartScreenScreenPresentational, {
    products,
    cartTotalPrice,
    handleRemove,
    handleAdd,
    handleSubtract,
  });
}
