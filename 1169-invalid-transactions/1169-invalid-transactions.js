/**
 * @param {string[]} transactions
 * @return {string[]}
 */
const invalidTransactions = transactions => {
    const history = {}
    
    // keep track of transactions of each user
    for (const transaction of transactions) {
        const [name, time, amount, city] = transaction.split(",")
        
        if (!history.hasOwnProperty(name)) history[name] = []
        history[name].push({time, city})
    }
    
    // check each transaction for validity
    return transactions.filter(t => isInvalid(t, history))
}

const isInvalid = (transaction, history) => {
    const [tName, tTime, tAmount, tCity] = transaction.split(",")
    
    if (tAmount > 1000) return true
    
    // iterate through the user's transaction history
    for (const {time, city} of history[tName]) {
        if (Math.abs(time - tTime) <= 60 && city !== tCity) {
            return true
        }
    }
    
    return false
}