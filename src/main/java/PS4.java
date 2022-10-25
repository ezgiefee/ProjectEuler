//A palindromic number reads the same both ways. The largest palindrome made from
// the product of two 2-digit numbers is 9009 = 91 × 99.
//Find the largest palindrome made from the product of two 3-digit numbers.
import java.util.ArrayList;
import java.util.List;

public class PS4 {
    public static void main(String[] args) {
        result();
    }
    public static int result(){
        int max = 0;
        for(int i=999; i>99; i--){
            for(int j=999; j>99; j--) {
                if (palindrome(i * j)) {
                    max = Math.max(i * j, max);
                }
            }
        }
        System.out.println("Result is " + max);
        return max;
    }

    public static boolean palindrome(int number) {
        List numbers = new ArrayList();
        boolean isPalindrome = true;
        int temp = 0;
        while (number > 0) {
            temp = number % 10;
            number = number / 10;
            numbers.add(temp);
        }
        int index =  numbers.size();
        int a , b;
        for (int i = 0; i < index/2; i++) {
            if (numbers.get(i) != numbers.get(index-i-1)) {
                isPalindrome = false;
            }
        }
        return isPalindrome;
    }
}
