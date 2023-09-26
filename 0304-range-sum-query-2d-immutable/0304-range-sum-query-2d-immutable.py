class NumMatrix:

    def __init__(self, matrix: List[List[int]]):
        # initilize a 2D matrix with an extra row[0] of 0's and start every row with 0's
        # in order to handle edge cases
        ROWS, COLS = len(matrix), len(matrix[0])
        self.sumMat = [ [0] * (COLS + 1) for r in range(ROWS + 1)]
        
        # the prefix sum will be the sum of sumMat[0][0] to sumMat[r][c]
        for r in range(ROWS):
            prefix_sum = 0
            for c in range(COLS):
                # update prefix_sum
                prefix_sum += matrix[r][c]
                
                # add prefix sum above the column and store it to bottom right
                # the row (and col) is offset by +1, but we want the row above -1, which leaves us with just r
                prefix_sum_above = self.sumMat[r][c + 1]
                self.sumMat[r + 1][c + 1] = prefix_sum + prefix_sum_above
                
    def sumRegion(self, r1: int, c1: int, r2: int, c2: int) -> int:
        # offset to our new 2D matrix, sumMat
        r1, c1, r2, c2 = r1 + 1, c1 + 1, r2 + 1, c2 + 1

        # get all necessary sum components
        bottom_right = self.sumMat[r2][c2]
        top_row = self.sumMat[r1 - 1][c2]
        left_column = self.sumMat[r2][c1 - 1]
        top_left = self.sumMat[r1 - 1][c1 - 1]
        
        # add the top_left back since it was subtracted twice (top_row and left_column)
        return bottom_right - top_row - left_column + top_left

# Your NumMatrix object will be instantiated and called as such:
# obj = NumMatrix(matrix)
# param_1 = obj.sumRegion(row1,col1,row2,col2)