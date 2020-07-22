const shortestSuperstring = require('./coding_Assessment');
const checkCommonPair = require('./coding_Assessment');

it('return shortest common superstring', () => {
    expect(shortestSuperstring(["all is well", "ell that en", "hat end", "t ends well"])).toEqual("all is well that ends well");
});

it('return shortest common superstring', () => {
    expect(shortestSuperstring(["aaa", "aab", "abb", "bba", "bbb"])).toEqual("aaabbba");
});

it('return empty string if file is empty', () => {
    expect(shortestSuperstring(["", "", ""])).toEqual("");
})

it('removeoverlappingstring', () => {
    expect(checkCommonPair(["abcdef", "cdefgh"])).toEqual("abcdefgh");
})
it('string 2 is contained within string1', () => {
    expect(checkCommonPair(["well", "we"])).toEqual("well");
})
it('string 2 is empty', () => {
    expect(checkCommonPair(["that", ""])).toEqual("that");
})
it('string1 not equal to string2', () => {
    expect(checkCommonPair(["ell", "that"])).toEqual("ellthat");
})
it('BasicCaseLongOnLeft', () => {
    expect(checkCommonPair(["1234567", "56789"])).toEqual("123456789");
})
it('NonOverlappingAreConcatenated', () => {
    expect(checkCommonPair(["1234", "56789"])).toEqual("123456789");
})
it('BasicCaseLongOnRight', () => {
    expect(checkCommonPair(["1234", "23456789"])).toEqual("123456789");
})
it('SubstringIsIgnored', () => {
    expect(checkCommonPair(["1234", "23456789", "456"])).toEqual("123456789");
})
it('UseBestStringMatchNotFirstMatch', () => {
    expect(checkCommonPair(["abcde", "efghi", "cdewooe"])).toEqual("abcdewooefghi");
})
it('TestProblemExample', () => {
    expect(checkCommonPair(["all is well", "ell that en", "hat end", "t ends well"])).toEqual("all is well that ends well");
})
it('TestSample1', () => {
    expect(checkCommonPair("O draconia;conian devil! Oh la;h lame sa;saint!".split(";"))).toEqual("O draconian devil! Oh lame saint!");
})
it('TestSample2', () => {
    expect(checkCommonPair("m quaerat voluptatem.;pora incidunt ut labore et d;, consectetur, adipisci velit;olore magnam aliqua;idunt ut labore et dolore magn;uptatem.;i dolorem ipsum qu;iquam quaerat vol;psum quia dolor sit amet, consectetur, a;ia dolor sit amet, conse;squam est, qui do;Neque porro quisquam est, qu;aerat voluptatem.;m eius modi tem;Neque porro qui;, sed quia non numquam ei;lorem ipsum quia dolor sit amet;ctetur, adipisci velit, sed quia non numq;unt ut labore et dolore magnam aliquam qu;dipisci velit, sed quia non numqua;us modi tempora incid;Neque porro quisquam est, qui dolorem i;uam eius modi tem;pora inc;am al".split(";")))
    .toEqual("Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.");
})