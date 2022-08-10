import { findNb } from './findNb';
import { assert } from 'chai';

describe('Fixed Tests nbMonths', () => {
  it('Basic tests', () => {
    assert.strictEqual(findNb(4183059834009), 2022);
    assert.strictEqual(findNb(24723578342962), -1);
    assert.strictEqual(findNb(135440716410000), 4824);
    assert.strictEqual(findNb(40539911473216), 3568);
  });
});
