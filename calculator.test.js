const { sum, div, multi, soust, dateTime2000 } = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);

});

test(' 1 / 1 to equal 1', () => {
    expect(div(1, 1)).toBe(1);

});

test(' 1 * 1 to equal 1', () => {
    expect(multi(1, 1)).toBe(1);


});

test(' 1 - 1 to equal 0', () => {
    expect(soust(1, 1)).toBe(0);

});

describe('dateTime2000', () => {
    let originalDateNow = Date.now;

    beforeEach(() => {
        Date.now = () => new Date("2000-01-01T00:10:00").getTime()
    });

    afterEach(() => {
        Date.now = originalDateNow
    });

    test('dateTime2000', () => {       
        expect(dateTime2000()).toBe(600)
    });

});
