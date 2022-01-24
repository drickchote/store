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
  cartTotalPrice: number;
  addProducts(products: ProductInterface[]): void;
  removeProduct(productId: string): void;
  incrementQuantity(productId: string): void;
  decrementQuantity(productId: string): void;
}
