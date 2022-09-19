//The sum of the squares of the first ten natural numbers is 385
//The square of the sum of the first ten natural numbers is 3025
//Hence the difference between the sum of the squares of the first
// ten natural numbers and the square of the sum is 3025-385=2640
//Find the difference between the sum of the squares of the first
// one hundred natural numbers and the square of the sum.

public class PS6 {
    public static int naturalDifference(int n){
        int result = 0;
        int sum1 = 0;
        int sum2 = 0;
        for(int i=1;i<=n;i++){
            sum1 += Math.multiplyExact(i,i);
            sum2 += i;
        }
        result = Math.multiplyExact(sum2,sum2) - sum1;
        return result;
    }
}
