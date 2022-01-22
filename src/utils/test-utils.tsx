import React, {JSXElementConstructor, ReactElement} from 'react';
import {ThemeProvider} from 'styled-components/native';
import {render, RenderOptions} from '@testing-library/react-native';
import {theme} from '~/shared';

interface providersProps {
  children: React.ReactNode;
}

const AllTheProviders = ({children}: providersProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const customRender = (
  ui: ReactElement<any, string | JSXElementConstructor<any>>,
  options: RenderOptions,
) => render(ui, {wrapper: AllTheProviders, ...options});

export * from '@testing-library/react-native';

export {customRender as render};
