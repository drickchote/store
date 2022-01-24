import React from 'react';
import {CartContext} from './context';

export function useCart() {
  const context = React.useContext(CartContext);

  return context;
}
