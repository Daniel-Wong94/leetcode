const invalidTransactions = (transactions: string[]): string[] => {
    const history = {}
    
    for (const transaction of transactions) {
        const [name, time, amount, city] = transaction.split(",")
        const value = { time : Number(time), city }
        
        if (name in history) history[name].push(value)
        else history[name] = [value]
    }
    
    return transactions.filter(t => isInvalid(t, history))
};

const isInvalid = (transaction : string, history : object): boolean => {
    const [tName, tTime, tAmount, tCity] = transaction.split(",")
    
    if (Number(tAmount) > 1000) return true
    
    for (const {time, city} of history[tName]) {
        if (Math.abs(Number(tTime) - time) <= 60 && city !== tCity) {
            return true
        }
    }
    
    return false;
}