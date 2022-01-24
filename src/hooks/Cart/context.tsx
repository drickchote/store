import React, {useMemo, useState} from 'react';

// Types
import {ProductCartProps, CartProviderProps, CartContextProps} from './types';

export const CartContext = React.createContext<CartContextProps>(
  {} as CartContextProps,
);

export function CartProvider({children}: CartProviderProps) {
  const [cartProducts, setCartProducts] = useState<ProductCartProps[]>([]);

  const cartProductsQuantity = useMemo(() => {
    return cartProducts.reduce((acc, current) => acc + current.quantity, 0);
  }, [cartProducts]);

  function addProducts(products: ProductCartProps[]) {
    for (const product of products) {
      product.quantity = product.quantity || 1;
      addProduct(product);
    }
  }

  function addProduct(product: ProductCartProps) {
    const productInCart = cartProducts.find(
      cartProduct => cartProduct.id === product.id,
    );

    if (!productInCart) {
      setCartProducts(currentCartProducts => [...currentCartProducts, product]);
    } else {
      mergeProduct(product);
    }
  }

  function mergeProduct(product: ProductCartProps) {
    setCartProducts(currentCartProducts =>
      currentCartProducts.map(currentCartProduct => {
        if (currentCartProduct.id === product.id) {
          return {
            ...currentCartProduct,
            quantity: currentCartProduct.quantity + product.quantity,
          };
        }
        return currentCartProduct;
      }),
    );
  }

  function removeProduct(productId: string) {
    setCartProducts(currentCartProducts =>
      currentCartProducts.filter(product => product.id !== productId),
    );
  }

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        cartProductsQuantity,
        addProducts,
        removeProduct,
      }}>
      {children}
    </CartContext.Provider>
  );
}
