/** 
*AUTHOR: Harry Gill
*Description:Program that reads a file of text fragments and attempts to reconstruct the original document out of the fragments
*Date: 19/07/2020
*/
function shortestSuperstring(fragments) {
    while (fragments.length > 1) {
        let maxOverlapLength = 0;
        let maxCommonString = fragments[0] + fragments[1];
        let maxCommonWords = [fragments[0], fragments[1]];
        for (let i = 0; i < fragments.length - 1; i++) {
            for (let j = i + 1; j < fragments.length; j++) {
                const { commonLength, commonString } = checkCommonPair(fragments[i], fragments[j])
                /**
                 * Updates only when find a common string and the common length is not
                 * less than the max common length.
                 */
                if (commonString && commonLength >= maxOverlapLength) {
                    maxOverlapLength = commonLength;
                    maxCommonString = commonString;
                    maxCommonWords = [fragments[i], fragments[j]];
                }
            }
        }
        /** Removes the checked word. */
        fragments = fragments.filter(word => word !== maxCommonWords[0] &&
            word !== maxCommonWords[1]);
        /** Adds the ideal common string at the head. */
        fragments.unshift(maxCommonString);
    }
    return fragments[0];
}

/** Checks the length and pair string of the pair. */
var checkCommonPair = function (s1, s2) {
    let maxOverlapLength = 0;
    let commonString = '';
    /** Makes sure s1 is always the shorter  one. */
    if (s1.length > s2.length) s1, s2 = s2, s1;

    /** Checks s1 suffix and s2 prefix. */
    for (let stringLength = 1; stringLength < s1.length; stringLength++) {
        const s1Suffix = s1.substring(s1.length - stringLength);
        const s2Prefix = s2.substring(0, stringLength);
        if (s1Suffix === s2Prefix && stringLength > maxOverlapLength) {
            maxOverlapLength = stringLength;
            commonString = s1 + s2.substring(stringLength);
        }
    }

    /** Checks s1 prefix and s2 suffix. */
    for (let stringLength = 1; stringLength < s1.length; stringLength++) {
        const s1Prefix = s1.substring(0, stringLength);
        const s2Suffix = s2.substring(s2.length - stringLength);
        if (s1Prefix === s2Suffix && stringLength > maxOverlapLength) {
            if (stringLength > maxOverlapLength) {
                maxOverlapLength = stringLength;
                commonString = s2 + s1.substring(stringLength);
            }
        }
    }
    return {
        commonLength: maxOverlapLength,
        commonString,
    };
}

module.exports = shortestSuperstring;
