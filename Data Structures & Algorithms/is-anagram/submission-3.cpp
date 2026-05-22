class Solution {
public:
    bool isAnagram(string s, string t) {
        if (s.size() != t.size()) return false;
        
        map<char, int> ss, tt;
        for (char c : s) ss[c]++;
        for (char c : t) tt[c]++;
        for (auto a : ss) {
            if (a.second != tt[a.first]) return false;
        }
        return true;
    }
};
