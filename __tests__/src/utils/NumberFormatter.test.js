import {toMoney} from '~/utils/NumberFormatter';

describe('toMoney function', () => {
  test('50.99 should return R$ 50,99', () => {
    expect(toMoney(50.99)).toBe('R$ 50,99');
  });

  test('10000 should return R$ R$ 10.000,00', () => {
    expect(toMoney(10000)).toBe('R$ 10.000,00');
  });
});
