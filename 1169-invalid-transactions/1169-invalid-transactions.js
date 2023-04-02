/**
 * @param {string[]} transactions
 * @return {string[]}
 */
const invalidTransactions = transactions => {
    const invalid = []
    const history = {}
    
    for (const transaction of transactions) {
        const [name, time, amount, city] = transaction.split(",")
        
        if (history.hasOwnProperty(name)) {
            history[name].push({city, time})
        } else {
            history[name] = [{city, time}]
        }
    }
    
    for (const transaction of transactions) {
        const [name, time, amount, city] = transaction.split(",")
        
        if (isInvalid(transaction, history)) invalid.push(transaction)
    }
    
    return invalid;
}

const isInvalid = (transaction, history) => {
    const [tName, tTime, tAmount, tCity] = transaction.split(",")
        
    if (tAmount > 1000) return true;
    
    for (const {city, time} of history[tName]) {
        if (Math.abs(time - tTime) <= 60 && tCity !== city) {
            return true
        }
    }
    
    return false;
}