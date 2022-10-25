//The following iterative sequence is defined for the set of positive integers:
//n → n/2 (n is even)
//n → 3n + 1 (n is odd)
//Using the rule above and starting with 13, we generate the following sequence:
//13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
//It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been
// proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.
//Which starting number, under one million, produces the longest chain?

import java.util.ArrayList;
import java.util.List;

public class PS14 {
    public static void main(String[] args) {
        getCollatzNumber();
    }
    public static void getCollatzNumber(){
        int result = 0;
        int limit = 1000000;
        int max = 1;
        int size = 0;

        for(int i=1; i<limit;i++){
            size = getChain(i);
           if(size > max){
               max = size;
               result = i;
           }
        }
        System.out.println("Maximum number for the longest chain is : " + result);
    }
    private static int getChain(int collatzNumber){
        Long number = Long.valueOf(collatzNumber);
        List<Long> chain = new ArrayList();
        while(number != 1){
            chain.add(number);
            if(number % 2 == 0){
                number = number/2;
            } else {
                number = (3*number) + 1;
            }
        }
        int size = chain.size();
        return size;
    }
}
