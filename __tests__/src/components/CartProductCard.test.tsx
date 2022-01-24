import React from 'react';
import '@testing-library/jest-native';
import {render} from '~/utils/test-utils';
import {toMoney} from '~/utils/NumberFormatter';
import {CartProductCard} from '~/components';

describe('CartProductCard', () => {
  describe('Render properly', () => {
    it('render with no errors', () => {
      const {getByTestId} = render(
        <CartProductCard
          id="1"
          name="Rustic Metal Fish"
          price={50}
          stock={10}
          quantity={10}
          uri="https://picsum.photos/640/480/"
        />,
      );
      const cartProductCard = getByTestId('cartProductCard');
      expect(cartProductCard).toBeDefined();
    });

    it('render formatted total value', () => {
      const price = 50;
      const quantity = 10;
      const total = price * quantity;
      const formattedTotal = toMoney(total);
      const {getByText} = render(
        <CartProductCard
          id="1"
          name="Rustic Metal Fish"
          price={price}
          stock={10}
          quantity={quantity}
          uri="https://picsum.photos/640/480/"
        />,
      );
      const priceHeadind = getByText(formattedTotal);
      expect(priceHeadind).toBeDefined();
    });

    it('should disable minus button when quantity equal zero', () => {
      const price = 50;
      const quantity = 0;
      const {queryByTestId} = render(
        <CartProductCard
          id="1"
          name="Rustic Metal Fish"
          price={price}
          stock={10}
          quantity={quantity}
          uri="https://picsum.photos/640/480/"
        />,
      );
      const disabledMinusIcon = queryByTestId('disabledMinusIcon');
      expect(disabledMinusIcon).toBeDefined();

      const minusIcon = queryByTestId('minusIcon');
      expect(minusIcon).toBeNull();
    });

    it('should disable plus button when quantity equal stock', () => {
      const price = 50;
      const quantity = 5;
      const stock = 5;
      const {queryByTestId} = render(
        <CartProductCard
          id="1"
          name="Rustic Metal Fish"
          price={price}
          stock={stock}
          quantity={quantity}
          uri="https://picsum.photos/640/480/"
        />,
      );
      const disabledPlusIcon = queryByTestId('disabledPlusIcon');
      expect(disabledPlusIcon).toBeDefined();

      const plusIcon = queryByTestId('plusIcon');
      expect(plusIcon).toBeNull();
    });
  });
});
