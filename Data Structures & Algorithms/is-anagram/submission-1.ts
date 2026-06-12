class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        const sMap: Map<string, number> = new Map();
        const tMap: Map<string, number> = new Map();

        for (let i = 0; i < s.length; i++) {
            sMap.set(s[i], (sMap.get(s[i]) + 1 || 1));
            tMap.set(t[i], (tMap.get(t[i]) + 1 || 1));
        }

        for (let [k, val] of sMap) {
            if (tMap.get(k) !== val) return false;
        }
        return true;
    }
}
