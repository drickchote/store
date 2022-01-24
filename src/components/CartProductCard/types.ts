export interface CartProductCardPropsInterface {
  id: string;
  name: string;
  stock: number;
  price: number;
  uri: string;
  quantity: number;
  onAdd(id: string): void;
  onSubtract(id: string): void;
  onRemove(id: string): void;
}
