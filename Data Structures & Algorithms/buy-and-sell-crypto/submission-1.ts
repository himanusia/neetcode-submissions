class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let ans = 0;
        let minBuy = prices[0];

        for (let sell of prices) {
            ans = Math.max(ans, sell - minBuy);
            minBuy = Math.min(minBuy, sell);
        }

        return ans;
    }
}
