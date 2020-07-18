const shortestSuperstring = require('./coding_Assessment');
const checkCommonPair = require('./coding_Assessment');

test('return shortest common superstring', () => {
    expect(shortestSuperstring(["all is well", "ell that en", "hat end", "t ends well"])).toEqual("all is well that ends well");
});

test('return shortest common superstring', () => {
    expect(shortestSuperstring(["aaa", "aab", "abb", "bba", "bbb"])).toEqual("aaabbba");
});

test('return empty string if file is empty', () => {
    expect(shortestSuperstring(["", "", ""])).toEqual("");
})

it('return empty string if file is empty', () => {
    expect(checkCommonPair(["abcdef", "cdefgh"])).toEqual("abcdefgh");
})
it('string2 is contained within string1', () => {
    expect(checkCommonPair(["well", "we"])).toEqual("well");
})
it('string 2 is empty', () => {
    expect(checkCommonPair(["that", ""])).toEqual("that");
})
it('string1 not equal to string2', () => {
    expect(checkCommonPair(["ell", "that"])).toEqual("ellthat");
})