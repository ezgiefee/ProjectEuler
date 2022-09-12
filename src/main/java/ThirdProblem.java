/* What is the largest prime factor of the number 600851475143 ? */
public class ThirdProblem {
    public Long findLargestPrime(Long number){
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
