export interface ProductInterface {
  id: string;
  createdAt: string;
  name: string;
  price: string;
  image: string;
  stock: number;
  isSelected?: boolean;
}

export interface ProductListScreenPresentationalInterface {
  products: ProductInterface[];
  cartProductsQuantity: number;
  isAddButtonDisabled: boolean;
  handleFilter(text: string): void;
  handleAddToCart(): void;
  handleSelectProduct(id: string): void;
  handlePressCart(): void;
}
