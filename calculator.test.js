const {sum, div} = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
    expect(div(1,1)).toBe(1);
});
