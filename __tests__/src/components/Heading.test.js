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
      <Heading type="H7">Hello</Heading>
      <Heading type="H8">Hello</Heading>
      <Heading type="H9">Hello</Heading>
      <Heading type="H10">Hello</Heading>
      <Heading type="H11">Hello</Heading>
      <Heading type="H12">Hello</Heading>
      <Heading type="H13">Hello</Heading>
      <Heading type="H14">Hello</Heading>
      <Heading type="H15">Hello</Heading>
    </ThemeProvider>,
  );

  const headings = getAllByText('Hello');
  expect(headings.length).toEqual(15);
});
