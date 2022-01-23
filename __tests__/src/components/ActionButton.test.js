import React from 'react';
import {ActionButton} from '~/components';
import {render} from '~/utils/test-utils';
import {toHaveStyle} from '@testing-library/jest-native';
import {colors} from '~/shared';

describe('Render ActionButton properly', () => {
  expect.extend({toHaveStyle});

  it('should have enabled background', () => {
    const {getByTestId} = render(<ActionButton />);

    const button = getByTestId('actionButton');
    expect(button).toHaveStyle({backgroundColor: colors.primary});
  });

  it('should have disabled background', () => {
    const {getByTestId} = render(<ActionButton isDisabled={true} />);

    const button = getByTestId('actionButton');
    expect(button).toHaveStyle({backgroundColor: colors.disabledPrimary});
  });
});
