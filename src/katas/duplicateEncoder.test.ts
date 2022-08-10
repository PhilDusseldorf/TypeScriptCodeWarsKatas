import { assert } from 'chai';
import { duplicateEncoder } from './duplicateEncoder';

// TODO Add your tests here
describe('example', () => {
  it('test', () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    assert.strictEqual(duplicateEncoder('din'), '(((');
    assert.strictEqual(duplicateEncoder('recede'), '()()()');
    assert.strictEqual(
      duplicateEncoder('Success'),
      ')())())',
      'should ignore case',
    );
    assert.strictEqual(duplicateEncoder('(( @'), '))((');
  });
});
