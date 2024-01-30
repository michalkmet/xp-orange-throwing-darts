const throwingDarts = require('./throwing-darts');

describe('hello', () => {
  it('should return hello', () => {
    expect(throwingDarts()).toBe('hello');
  });
});
