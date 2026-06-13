class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let l = new Array(nums.length + 1).fill(1),
            r = new Array(nums.length + 1).fill(1);
        for (let i = 0; i < nums.length; i++) {
            l[i + 1] = l[i] * nums[i];
            r[nums.length - i - 1] = r[nums.length - i] * nums[nums.length - i - 1]; 
        }

        let ans = new Array(nums.length);
        for (let i = 0; i < nums.length; i++) {
            ans[i] = l[i] * r[i+1];
        }
        return ans;
    }
}
