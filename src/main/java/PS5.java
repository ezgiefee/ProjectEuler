//2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
//What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
import java.util.ArrayList;
import java.util.List;

public class PS5 {
    public static void multiple(){
        int multiple = 2;
        int k = 1;
        while (k<=20){
            if(multiple % k == 0){
                k++;
                continue;
            } else {
                List a = multiplier(k);
                for(int i=0;i<a.size();i++){
                    multiple *= (int) a.get(i);
                    if(multiple % k == 0){
                        break;
                    }
                }

            }
            k++;
        }
        System.out.println("Divisible number is : "+multiple);
    }
    public static List multiplier(int n) {
        List multipliers = new ArrayList();
        for (int j = 2; j <= n; j++) {
            if (n % j == 0) {
                multipliers.add(j);
            }
        }
        return multipliers;
    }

}
