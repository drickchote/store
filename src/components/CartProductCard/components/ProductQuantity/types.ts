export interface ProductQuantityInterface {
  id: string;
  quantity: number;
  isAddDisabled?: boolean;
  onAdd(id: string): void;
  onSubtract(id: string): void;
}
