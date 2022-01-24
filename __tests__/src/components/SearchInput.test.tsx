import React from 'react';
import {SearchInput} from '~/components';
import {render} from '~/utils/test-utils';

test('Render SearchInput without errors', () => {
  render(<SearchInput onChangeText={() => {}} />);
});
