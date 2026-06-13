class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        for (let i = 0; i < 9; i++) {
            let set1 = new Set(), set2 = new Set();
            for (let j = 0; j < 9; j++) {
                if (board[i][j] !== '.') {
                    if (set1.has(board[i][j])) return false;
                    set1.add(board[i][j]);
                }
                if (board[j][i] !== '.') {
                    if (set2.has(board[j][i])) return false;
                    set2.add(board[j][i]);
                }
            }
        }

        for (let i = 0; i < 9; i += 3) {
            for (let j = 0; j < 9; j += 3) {
                let set = new Set();
                for (let k = 0; k < 3; k++) {
                    for (let l = 0; l < 3; l++) {
                        if (board[i+k][j+l] !== '.') {
                            if (set.has(board[i+k][j+l])) return false;
                            set.add(board[i+k][j+l]);
                        }
                    }
                }
            }
        }
        return true;
    }
}
