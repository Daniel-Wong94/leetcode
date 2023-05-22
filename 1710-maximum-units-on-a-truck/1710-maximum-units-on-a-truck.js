/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort((a, b) => b[1] - a[1])
    console.log(boxTypes)
    
    let count = 0
    
    for (const [numberOfBoxes, numberOfUnitsPerBox] of boxTypes) {
        const totalBoxes = numberOfBoxes * numberOfUnitsPerBox
        if (truckSize >= numberOfBoxes) {
            truckSize -= numberOfBoxes
            count += totalBoxes
        } else {
            while (truckSize > 0) {
                truckSize--
                count += numberOfUnitsPerBox
            }
        }
    }
    
    return count;
};