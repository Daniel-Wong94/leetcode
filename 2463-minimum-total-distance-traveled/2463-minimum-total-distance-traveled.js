/**
 * @param {number[]} robot
 * @param {number[][]} factory
 * @return {number}
 */
const minimumTotalDistance = (robots, factorys) => {
    // sort robots and factory by position
    robots.sort((a, b) => a - b)
    factorys.sort((a, b) => a[0] - b[0])
    
    return _minimumTotalDistance(robots, factorys)
}

// fixedRobots is the number of robots fixed by a factory
const _minimumTotalDistance = (robots, factorys, robot = 0, factory = 0, fixedRobots = 0, memo = {}) => {
    const key = robot + "," + factory + "," + fixedRobots
    if (key in memo) return memo[key]
    
    // base case
    if (robot === robots.length) return 0
    if (factory === factorys.length) return Infinity
    
    // decisions: fix with next factory OR fix with current factory
    const nextFactory = _minimumTotalDistance(robots, factorys, robot, factory + 1, 0, memo)
    
    // if current factory's limit is reached, set to Infinity so that min does not take it
    let currFactory = Infinity;
    
    // check if current factory's limit is not reached yet
    if (factorys[factory][1] > fixedRobots) {    
        const currDistance = Math.abs(robots[robot] - factorys[factory][0])
        currFactory = currDistance + _minimumTotalDistance(robots, factorys, robot + 1, factory, fixedRobots + 1, memo)
    }
    
    // store the min of the two decisions
    memo[key] = Math.min(nextFactory, currFactory)
    return memo[key]
}
