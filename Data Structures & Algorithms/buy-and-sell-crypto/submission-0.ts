class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let l = 0;
        let r = 1;
        let ans = 0;

        while (r < prices.length) {
            if (prices[l] < prices[r]) {
                let profit = prices[r] - prices[l];
                ans = Math.max(ans, profit);
            } else {
                l = r
            }
            r++;
        }

        return ans;
    }
}
