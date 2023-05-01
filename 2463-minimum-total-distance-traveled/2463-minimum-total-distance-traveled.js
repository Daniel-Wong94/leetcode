/**
 * @param {number[]} robot
 * @param {number[][]} factory
 * @return {number}
 */
const minimumTotalDistance = (robots, factorys) => {
    // robots and factory by position
    robots.sort((a, b) => a - b)
    factorys.sort((a, b) => a[0] - b[0])
    
    const result = _minimumTotalDistance(robots, factorys)
    
    return result
}

const _minimumTotalDistance = (robots, factorys, robot = 0, factory = 0, fixedRobots = 0, memo = {}) => {
    const key = robot + "," + factory + "," + fixedRobots
    if (key in memo) return memo[key]
    
    // base case
    if (robot === robots.length) return 0
    if (factory === factorys.length) return Infinity
    
    const nextFactory = _minimumTotalDistance(robots, factorys, robot, factory + 1, 0, memo)
    const currDistance = Math.abs(robots[robot] - factorys[factory][0])
    let currFactory = Infinity;
    
    if (factorys[factory][1] > fixedRobots) {
        currFactory = currDistance + _minimumTotalDistance(robots, factorys, robot + 1, factory, fixedRobots + 1, memo)
    }
    
    memo[key] = Math.min(nextFactory, currFactory)
    return memo[key]
}
