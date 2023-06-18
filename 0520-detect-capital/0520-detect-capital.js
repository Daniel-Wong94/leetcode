/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    return word.toUpperCase() === word || (word[0] === word[0].toUpperCase() && word.slice(1) === word.slice(1).toLowerCase()) || word === word.toLowerCase()
};