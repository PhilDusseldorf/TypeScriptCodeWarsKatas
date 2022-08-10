/* eslint-disable @typescript-eslint/no-unsafe-call */
import { reverseWords } from './reverseWords';
import { assert } from 'chai';

describe('Sample Test Cases', () => {
  it('Should return a proper value', () => {
    assert.equal(
      reverseWords('The quick brown fox jumps over the lazy dog.'),
      'ehT kciuq nworb xof spmuj revo eht yzal .god',
    );
    assert.equal(reverseWords('apple'), 'elppa');
    assert.equal(reverseWords('a b c d'), 'a b c d');
    assert.equal(
      reverseWords('double  spaced  words'),
      'elbuod  decaps  sdrow',
    );
  });
});
