import java.math.BigInteger;

//power(2,15) = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
//What is the sum of the digits of the number power(2,1000) ?
public class PS16 {
    public static void main(String[] args) {
        System.out.println(sumDigits(1000));
    }
    public static int sumDigits(int number){
        int sum = 0;
        BigInteger digit = new BigInteger("2");
        digit = digit.pow(number);
        String result = digit.toString();

        for(int i= 0; i<result.length();i++){
            sum += Integer.parseInt(String.valueOf(result.charAt(i)));
        }
        return sum;
    }
}
