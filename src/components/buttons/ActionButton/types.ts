export interface ButtonContainerInterface {
  isDisabled: boolean;
}

export interface ActionButtonInterface {
  name: string;
  isDisabled?: boolean;
  onPress(): void;
}
