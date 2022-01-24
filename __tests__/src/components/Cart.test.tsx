import React from 'react';
import '@testing-library/jest-native';
import {Cart} from '~/components';
import {formatCartNumber} from '~/utils/NumberFormatter';
import {render} from '~/utils/test-utils';
import {colors} from '~/shared';

describe('Render CartIcon properly', () => {
  it('should render without errors', () => {
    const {getByText} = render(<Cart quantity={5} />);
    const cart = getByText('5');
    expect(cart).toBeDefined();
  });

  it('should format quantity', () => {
    const quantity = 10;
    const formatterQuantity = formatCartNumber(quantity);
    const {getByText} = render(<Cart quantity={quantity} />);
    const cart = getByText(formatterQuantity);
    expect(cart).toBeDefined();
  });

  it('should not show circle when quantity is 0', () => {
    const quantity = 0;
    const formatterQuantity = formatCartNumber(quantity);
    const {getByTestId} = render(<Cart quantity={quantity} />);
    const cartQuantity = getByTestId('cartQuantity');
    expect(formatterQuantity).toEqual('');
    expect(cartQuantity).toHaveStyle({
      backgroundColor: colors.screenBackground,
    });
  });
});
