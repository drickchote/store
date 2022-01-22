export function toMoney(value: number): string {
  const formattedMoney =
    'R$ ' +
    value
      .toFixed(2)
      .replace('.', ',')
      .replace(/(\d)(?=(\d{3})+,)/g, '$1.');
  return formattedMoney;
}

export function formatStock(stock: number): string {
  return stock > 999 ? '999+' : String(stock);
}
