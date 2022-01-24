import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {theme} from '~/shared';
import {CartProvider} from '~/hooks';
import {ProductNavigator} from '~/Navigators/presentational';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <ProductNavigator />
      </CartProvider>
    </ThemeProvider>
  );
};

export default App;
