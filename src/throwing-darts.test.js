const throwingDarts = require('./throwing-darts');

describe('User Story 1: 1 digit numbers', () => {
  it('UAT1.1 When I pass [1] then I should see 110', () => {
    expect(throwingDarts([1])).toBe(110);
  });
  it('UAT1.2 When I pass [4] then I should see 110', () => {
    expect(throwingDarts([4])).toBe(110);
  });
  it('UAT1.3 When I pass [5] then I should see 5', () => {
    expect(throwingDarts([5])).toBe(5);
  });
  it('UAT1.4 When I pass [9] then I should see 5', () => {
    expect(throwingDarts([9])).toBe(5);
  });
  it('UAT1.5 When I pass [10] then I should see 5', () => {
    expect(throwingDarts([10])).toBe(5);
  });
});
