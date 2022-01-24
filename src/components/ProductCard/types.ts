export interface ProductCardPropsInterface {
  id: string;
  name: string;
  stock: number;
  price: number;
  uri: string;
  isSelected: boolean | undefined;
  handlePress(id: string): void;
}

export interface containerInterface {
  isSelected: boolean | undefined;
}
