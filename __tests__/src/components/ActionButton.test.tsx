import React from 'react';
import '@testing-library/jest-native';
import {ActionButton} from '~/components';
import {render} from '~/utils/test-utils';
import {colors} from '~/shared';

describe('Render ActionButton properly', () => {
  it('should have enabled background', () => {
    const {getByTestId} = render(
      <ActionButton name="any" onPress={() => {}} />,
    );

    const button = getByTestId('actionButton');
    expect(button).toHaveStyle({backgroundColor: colors.primary});
  });

  it('should have disabled background', () => {
    const {getByTestId} = render(
      <ActionButton name="any" isDisabled={true} onPress={() => {}} />,
    );

    const button = getByTestId('actionButton');
    expect(button).toHaveStyle({backgroundColor: colors.disabledPrimary});
  });
});
