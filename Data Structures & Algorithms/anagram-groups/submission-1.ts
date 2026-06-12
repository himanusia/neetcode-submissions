class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map = new Map<string, string[]>();

        for (let i = 0; i < strs.length; i++) {
            const sorteds = strs[i].split('').sort().join('');
            if (!map.has(sorteds)) map.set(sorteds, []);
            map.get(sorteds)!.push(strs[i]);
        }
        
        return Array.from(map.values());
    }
}
