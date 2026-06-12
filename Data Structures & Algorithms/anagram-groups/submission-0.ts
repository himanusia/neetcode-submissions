class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map: Map<string, string[]> = new Map();

        for (let i = 0; i < strs.length; i++) {
            const sorteds = strs[i].split('').sort().join('');
            if (!map.has(sorteds)) map.set(sorteds, []);
            map.get(sorteds)!.push(strs[i]);
        }
        const ans: string[][] = [];
        for (let ss of map.values()) {
            ans.push(ss);
        }
        return ans;
    }
}
