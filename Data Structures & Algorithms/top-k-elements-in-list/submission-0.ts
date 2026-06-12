class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map: Map<number, number> = new Map();

        for (let i = 0; i < nums.length; i++) {
            map.set(nums[i], (map.get(nums[i]) || 0) + 1);
        }

        const arr = Array.from(map.entries());

        arr.sort((a, b) => b[1] - a[1]);

        const ans: number[] = [];

        for (let i = 0; i < k; i++) {
            ans.push(arr[i][0]);
        }

        return ans;
    }
}
