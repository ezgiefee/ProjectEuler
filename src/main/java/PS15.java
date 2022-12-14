//Starting in the top left corner of a 2×2 grid, and only being able to
//move to the right and down, there are exactly 6 routes to the bottom right corner.
//How many such routes are there through a 20×20 grid?

public class PS15 {
    public static void main(String[] args) {
        final int gridSize = 20;
        long[][] grid = new long[gridSize+1][gridSize+1];

        for(int i=0;i<gridSize;i++){
            grid[i][gridSize] = 1;
            grid[gridSize][i] = 1;
        }
        for(int i = gridSize-1; i>=0; i--){
            for(int j = gridSize-1;j>=0; j--){
                grid[i][j] = grid[i+1][j] + grid[i][j+1];
            }
        }
        System.out.println(grid[0][0]);
    }
}
