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

  const cartTotalPrice = useMemo(() => {
    return cartProducts.reduce(
      (acc, current) => acc + Number(current.price) * current.quantity,
      0,
    );
  }, [cartProducts]);

  function incrementQuantity(productId: string) {
    const productInCart = cartProducts.find(
      cartProduct => cartProduct.id === productId,
    );

    if (!productInCart) {
      return;
    }
    productInCart.quantity++;
    setCartProducts(currentCartProducts =>
      currentCartProducts.map(product => {
        if (product.id === productInCart.id) {
          return productInCart;
        }

        return product;
      }),
    );
  }

  function decrementQuantity(productId: string) {
    const productInCart = cartProducts.find(
      cartProduct => cartProduct.id === productId,
    );

    if (!productInCart) {
      return;
    }
    const {quantity} = productInCart;
    productInCart.quantity = quantity > 0 ? quantity - 1 : 0;
    setCartProducts(currentCartProducts =>
      currentCartProducts.map(product => {
        if (product.id === productInCart.id) {
          return productInCart;
        }

        return product;
      }),
    );
  }

  function setProductQuantity(id: string, quantity: number) {}

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
        cartTotalPrice,
        setProductQuantity,
        addProducts,
        removeProduct,
        incrementQuantity,
        decrementQuantity,
      }}>
      {children}
    </CartContext.Provider>
  );
}
