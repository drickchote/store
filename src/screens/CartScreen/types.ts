import {ProductCartProps} from '~/hooks/Cart/types';

export interface ProductInterface {
  id: string;
  createdAt: string;
  name: string;
  price: string;
  image: string;
  stock: number;
  isSelected?: boolean;
}

export interface CartScreenPresentationalInterface {
  products: ProductCartProps[];
  cartTotalPrice: number;
  handleAdd(id: string): void;
  handleSubtract(id: string): void;
  handleRemove(id: string): void;
}
