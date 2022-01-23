import {formatCartNumber, formatStock, toMoney} from '~/utils/NumberFormatter';

describe('toMoney function', () => {
  test('50.99 should return R$ 50,99', () => {
    expect(toMoney(50.99)).toBe('R$ 50,99');
  });

  test('10000 should return R$ R$ 10.000,00', () => {
    expect(toMoney(10000)).toBe('R$ 10.000,00');
  });
});

describe('formatStock function', () => {
  it('should return same number when stock <= 999', () => {
    expect(formatStock(999)).toBe('999');
  });

  it('should return 999+ when stock > 999', () => {
    expect(formatStock(1000)).toBe('999+');
  });
});

describe('formatCartNumber function', () => {
  it('should return same number when quantity <= 9', () => {
    expect(formatCartNumber(9)).toBe('9');
  });

  it('should return 9+ when quantity > 9', () => {
    expect(formatCartNumber(10)).toBe('9+');
  });
});
