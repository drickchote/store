export interface ProductQuantityInterface {
  quantity: number;
  isAddDisabled?: boolean;
  onAdd(): void;
  onSubtract(): void;
}
