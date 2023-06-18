/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    const sum = salary.reduce((a , b) => a + b, 0)
    const max = Math.max(...salary)
    const min = Math.min(...salary)
        
    return (sum - max - min) / (salary.length - 2)
};