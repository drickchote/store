export interface ProductCardPropsInterface {
  name: string;
  stock: number;
  price: number;
  uri: string;
  isSelected: boolean;
  handlePress(): void;
}

export interface containerInterface {
  isSelected: boolean;
}
