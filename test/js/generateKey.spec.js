import expect from 'expect';
import generateKey from '../../app/js/generateKey';

describe('generateKey', () => {
  it('generates a string of three digits based on a number', () => {
    expect(generateKey(0)).toBe('000');
    expect(generateKey(1)).toBe('001');
    expect(generateKey(10)).toBe('010');
    expect(generateKey(100)).toBe('100');
    expect(generateKey(1000)).toBe('1000');
  });
});
