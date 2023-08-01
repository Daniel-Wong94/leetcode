/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */

// edge case: if you use an ASCII delimiter, the str might contain it also
// solution: use a non ASCII character like π

var encode = function(strs) {
    return strs.join("π")
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
    return s.split("π")
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */