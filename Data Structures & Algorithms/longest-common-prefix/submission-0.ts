class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {
        let ans: string = "";
        for (let i = 0; i < strs[0].length; i++) {
            for (let j = 1; j < strs.length; j++) {
                if (strs[j][i] !== strs[0][i]) return ans;
            }
            ans = `${ans}${strs[0][i]}`;
        }
        return ans;
    }
}
