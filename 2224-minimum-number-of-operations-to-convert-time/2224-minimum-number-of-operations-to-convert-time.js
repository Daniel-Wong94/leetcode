/**
 * @param {string} current
 * @param {string} correct
 * @return {number}
 */
var convertTime = function(current, correct) {
    const [currentHrs, currentMins] = current.split(":").map(x => parseInt(x))
    const [correctHrs, correctMins] = correct.split(":").map(x => parseInt(x))
    const [totalCurrentMin, totalCorrectMin] = [(currentHrs * 60) + currentMins, (correctHrs * 60) + correctMins]
    const totalMinDiff = Math.abs(totalCurrentMin - totalCorrectMin)

    const hours = Math.floor(totalMinDiff / 60)
    const leftoverAfterHours = totalMinDiff % 60
    const fifteens = Math.floor(leftoverAfterHours / 15)
    const leftoverAfterFifteens = leftoverAfterHours % 15
    const fives = Math.floor(leftoverAfterFifteens / 5)
    const leftoverAfterFives = leftoverAfterFifteens % 5
    const ones = Math.floor(leftoverAfterFives / 1)

    return hours + fifteens + fives + ones
};