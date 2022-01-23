export interface CartProductCardPropsInterface {
  name: string;
  stock: number;
  price: number;
  uri: string;
  quantity: number;
  onAdd(): void;
  onSubtract(): void;
  onRemove(): void;
}
