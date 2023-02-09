/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    
    // binary search, if bad is found, check if the previous one is bad, if so, continue searching
    return function(n) {
        let left = 1
        let right = n
        let mid;
        
        while (left <= right) {
            mid = Math.floor((right - left) / 2) + left

            if (isBadVersion(mid))
                if (isBadVersion(mid-1)) right = mid - 1;
                else return mid
            else left = mid + 1;
        }
    };
}
