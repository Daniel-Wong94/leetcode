/**
 * @param {string[]} transactions
 * @return {string[]}
 */
const invalidTransactions = transactions => {
    const history = {}
    
    for (const transaction of transactions) {
        const [name, time, amount, city] = transaction.split(",")
        
        if (name in history) history[name].push({time, city})
        else history[name] = [{time, city}]
    }
    
    return transactions.filter(t => isInvalid(t, history))
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