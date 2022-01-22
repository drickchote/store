import React from 'react';
import {render} from '@testing-library/react-native';
import {Heading} from '~/components';
import {ThemeProvider} from 'styled-components/native';
import {theme} from '~/shared';

test('Render Heading properly', () => {
  const {getAllByText} = render(
    <ThemeProvider theme={theme}>
      <Heading type="H1">Hello</Heading>
      <Heading type="H2">Hello</Heading>
      <Heading type="H3">Hello</Heading>
      <Heading type="H4">Hello</Heading>
      <Heading type="H5">Hello</Heading>
      <Heading type="H6">Hello</Heading>
    </ThemeProvider>,
  );

  const headings = getAllByText('Hello');
  expect(headings.length).toEqual(6);
});
