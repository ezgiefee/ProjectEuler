//By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
//What is the 10001st prime number?
public class PS7 {
    public static void main(String[] args) {
        System.out.println(getPrimeNumbers());
    }
    public static int getPrimeNumbers(){
        int number = 3;
        int counter = 2;
        int result = 0;
        int count = 0;
        while(counter <= 10001){
            for(int i=2;i<=number;i++) {
                if (number % i == 0) {
                    count++;
                }
            }
            if(count == 1){
                result = number;
                counter++;
            }
            count = 0;
            number += 2;
        }
        return result;
    }
}
