/**
 * // This is the HtmlParser's API interface.
 * // You should not implement it, or speculate about its implementation
 * function HtmlParser() {
 *
 *		@param {string} url
 *     	@return {string[]}
 *     	this.getUrls = function(url) {
 *      	...
 *     	};
 * };
 */

/**
 * @param {string} startUrl
 * @param {HtmlParser} htmlParser
 * @return {string[]}
*/
var crawl = function(startUrl, htmlParser) {
    const visited = new Set()
    const startHostname = getHostname(startUrl)
    const stack = [ startUrl ]
    
    while (stack.length) {
        const url = stack.pop()
        const hostname = getHostname(url)
        visited.add(url)
        
        const nextUrls = htmlParser.getUrls(url)
        
        for (const nextUrl of nextUrls) {
            const nextHostname = getHostname(nextUrl)
            
            if (nextHostname === startHostname && !visited.has(nextUrl)) {
                stack.push(nextUrl)
            }
        }
    }
    
    return [...visited.values()]
};

const getHostname = url => url.split("/")[2]