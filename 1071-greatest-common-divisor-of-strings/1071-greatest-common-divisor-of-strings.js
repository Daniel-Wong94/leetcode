/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if (str1 + str2 !== str2 + str1) return ""
    
    const maxLength = gcd(str1.length, str2.length)
    
    return str1.slice(0, maxLength)
};

const gcd = (num1, num2) => {
    return 0 === num2 ? num1 : gcd(num2, num1 % num2)
}