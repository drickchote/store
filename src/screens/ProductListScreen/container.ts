// Dependencies
import React, {useEffect, useMemo, useState} from 'react';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

// hooks
import {useCart} from '~/hooks';

// Services
import {remoteGet} from '~/services';

// Presentational
import ProductListScreenPresentational from './presentational';

// Types
import {ProductInterface} from './types';

export function ProductListScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [products, setProducts] = useState<ProductInterface[]>([]);
  const [filterText, setFilterText] = useState<string>('');
  const {cartProductsQuantity, addProducts} = useCart();

  const filteredProducts = useMemo(() => {
    return products.filter(product => product.name.includes(filterText));
  }, [filterText, products]);

  const selectedProducts = useMemo(() => {
    return products.filter(product => product.isSelected);
  }, [products]);

  const isAddButtonDisabled = useMemo(() => {
    return selectedProducts.length === 0;
  }, [selectedProducts]);

  useEffect(() => {
    async function getProducts() {
      const url = 'https://5d6da1df777f670014036125.mockapi.io/api/v1/product';
      const response = await remoteGet<ProductInterface[]>(url);
      setProducts(response);
    }

    getProducts();
  }, []);

  function handleFilter(text: string) {
    setFilterText(text);
  }

  function handleAddToCart() {
    addProducts(selectedProducts);
    unselectAll();
  }

  function unselectAll() {
    setProducts(currentProducts =>
      currentProducts.map(product => ({...product, isSelected: false})),
    );
  }

  function handlePressCart() {
    navigation.navigate('CartScreen', {});
  }

  function handleSelectProduct(id: string) {
    const selectedProduct = products.find(product => product.id === id);
    if (!selectedProduct) {
      return;
    }
    selectedProduct.isSelected = !selectedProduct.isSelected;
    setProducts(current =>
      current.map(product => {
        if (product.id === selectedProduct.id) {
          selectedProduct;
        }
        return product;
      }),
    );
  }

  return React.createElement(ProductListScreenPresentational, {
    products: filteredProducts,
    cartProductsQuantity,
    isAddButtonDisabled,
    handleFilter,
    handleAddToCart,
    handleSelectProduct,
    handlePressCart,
  });
}
