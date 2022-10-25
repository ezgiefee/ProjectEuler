/* What is the largest prime factor of the number 600851475143 ? */
public class PS3 {
    public static void main(String[] args) {
        findLargestPrime(600851475143L);
    }
    public static Long findLargestPrime(Long number){
        for(Long i = 2L; i < Math.sqrt(number); i++){
            if(number % i == 0L ){
                number = number/i;
                i--;
            }
        }
        System.out.println(number);
        if(number >= 2L){
            return number;
        } else {
            return 0L;
        }
    }
}
