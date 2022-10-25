//The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
//Find the sum of all the primes below two million.

public class PS10 {
    public static void main(String[] args) {
        System.out.println(getPrimeNumbersSum());
    }
    public static Long getPrimeNumbersSum(){
        Long result = 2L;
        int count = 0;
        for (Long i = 3L;i <= 2000000L; i+=2){
            for(Long j = 2L; j<= i ; j++){
                if( i % j == 0){
                    count++;
                }
            }
            if(count == 1){
                result += i;
            }
            count = 0;
        }
        return result;
    }
}
