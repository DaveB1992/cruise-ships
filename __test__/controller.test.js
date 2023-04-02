const Controller = require('../src/controller');

describe('controller constructor', () => {
  it('returns an object', () => {
    expect(new Controller()).toBeInstanceOf(Object);
  });
});
