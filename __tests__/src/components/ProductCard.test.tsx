import React from 'react';
import '@testing-library/jest-native';
import {ProductCard} from '~/components/ProductCard';
import {render} from '~/utils/test-utils';
import {formatStock, toMoney} from '~/utils/NumberFormatter';

describe('ProductCard', () => {
  describe('Render properly', () => {
    it('render with no errors', () => {
      const {getByTestId} = render(
        <ProductCard
          id="1"
          name="Rustic Metal Fish"
          isSelected={false}
          price={50}
          stock={10}
          uri="https://picsum.photos/640/480/"
          handlePress={() => {}}
        />,
      );
      const productCard = getByTestId('productCard');
      expect(productCard).toBeDefined();
    });

    it('render formatted price', () => {
      const price = 50;
      const formattedPrice = toMoney(price);
      const {getByText} = render(
        <ProductCard
          id="1"
          name="Rustic Metal Fish"
          isSelected={false}
          price={price}
          stock={10}
          uri="https://picsum.photos/640/480/"
          handlePress={() => {}}
        />,
      );
      const priceHeadind = getByText(formattedPrice);
      expect(priceHeadind).toBeDefined();
    });

    it('render formatted stock', () => {
      const stock = 1000;
      const formattedStock = formatStock(stock);
      const {getByText} = render(
        <ProductCard
          id="1"
          name="Rustic Metal Fish"
          isSelected={false}
          price={50}
          stock={stock}
          uri="https://picsum.photos/640/480/"
          handlePress={() => {}}
        />,
      );
      const stockText = `Disponível: ${formattedStock}`;
      const stockHeadind = getByText(stockText);
      expect(stockHeadind).toBeDefined();
    });
  });

  describe('selected state', () => {
    it('should not show icon when not selected', () => {
      const {queryByTestId} = render(
        <ProductCard
          id="1"
          name="Rustic Metal Fish"
          isSelected={false}
          price={50}
          stock={10}
          uri="https://picsum.photos/640/480/"
          handlePress={() => {}}
        />,
      );
      const icon = queryByTestId('check-icon');
      expect(icon).toBeNull();
    });

    it('should show icon when selected', () => {
      const {getByTestId} = render(
        <ProductCard
          id="1"
          name="Rustic Metal Fish"
          isSelected={true}
          price={50}
          stock={10}
          uri="https://picsum.photos/640/480/"
          handlePress={() => {}}
        />,
      );
      const productCard = getByTestId('productCard');
      const icon = getByTestId('check-icon');

      expect(productCard).toContainElement(icon);
    });

    it('should show border when selected', () => {
      const {getByTestId} = render(
        <ProductCard
          id="1"
          name="Rustic Metal Fish"
          isSelected={true}
          price={50}
          stock={10}
          uri="https://picsum.photos/640/480/"
          handlePress={() => {}}
        />,
      );
      const productCard = getByTestId('productCard');
      expect(productCard).toHaveStyle({borderWidth: 3});
    });
  });
});
