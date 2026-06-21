function maxIceCream(costs: number[], coins: number): number {
    const MAX_PRICE = 100000;
 
    const count = new Array(MAX_PRICE + 1).fill(0);
    

    for (const cost of costs) {
        count[cost]++;
    }
    
    let iceCreamCount = 0;
    
    
    for (let price = 1; price <= MAX_PRICE; price++) {
        if (count[price] === 0) continue;
        
      
        if (coins < price) break;
        
        const countToBuy = Math.min(count[price], Math.floor(coins / price));
        
        iceCreamCount += countToBuy;
        coins -= countToBuy * price;
    }
    
    return iceCreamCount;
}