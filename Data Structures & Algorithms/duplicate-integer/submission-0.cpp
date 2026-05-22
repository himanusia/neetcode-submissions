class Solution {
public:
    bool hasDuplicate(vector<int>& nums) {
        set<int> s;
        for (auto a : nums) {
            if (s.count(a) > 0) {
                return true;
            }
            s.insert(a);
        }
        return false;
    }
};
