import React from 'react';

// Components
import {FlatList, TouchableOpacity} from 'react-native';
import {ActionButton, Cart, ProductCard, SearchInput} from '~/components';

// Stypes
import {Screen, CartContainer} from './styles';

// Types
import {
  ProductInterface,
  ProductListScreenPresentationalInterface,
} from './types';

export default function ProductListScreenPresentational({
  products,
  cartProductsQuantity,
  isAddButtonDisabled,
  handleFilter,
  handleAddToCart,
  handleSelectProduct,
  handlePressCart,
}: ProductListScreenPresentationalInterface) {
  function renderProduct({item}: {item: ProductInterface}) {
    const {id, name, stock, price, isSelected} = item;
    const uri = 'https://picsum.photos/640/480/';
    const productPrice = Number(price);
    return (
      <ProductCard
        id={id}
        name={name}
        isSelected={isSelected}
        price={productPrice}
        stock={stock}
        uri={uri}
        handlePress={handleSelectProduct}
      />
    );
  }
  return (
    <Screen>
      <CartContainer>
        <TouchableOpacity onPress={handlePressCart}>
          <Cart quantity={cartProductsQuantity} />
        </TouchableOpacity>
      </CartContainer>
      <SearchInput onChangeText={handleFilter} />
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={item => item.id}
      />

      <ActionButton
        name="Adicionar ao carrinho"
        onPress={handleAddToCart}
        isDisabled={isAddButtonDisabled}
      />
    </Screen>
  );
}
