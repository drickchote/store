import {ProductInterface} from '~/screens/ProductListScreen/types';

export interface ProductCartProps extends ProductInterface {
  quantity: number;
}

export interface CartProviderProps {
  children: React.ReactNode;
}

export interface CartContextProps {
  cartProducts: ProductCartProps[];
  cartProductsQuantity: number;
  addProducts(products: ProductInterface[]): void;
  removeProduct(productId: string): void;
}
