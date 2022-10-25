//By considering the terms in the Fibonacci sequence
// whose values do not exceed four million, find the
// sum of the even-valued terms.
public class PS2 {
    public static void main(String[] args) {
        result();
    }
    public static int result(){
        int sum = 0;
        int count = 1;
        int result = 0;

       while(count>0){
           result = fibonacci(count);
           if(result > 4000000){
               break;
           }
           if(result % 2 == 0L){
               System.out.println("Result : " + result);
               sum += result;
           }
           count++;
        }
        return sum;
    }

    public static int fibonacci(int n){
        if(n == 0 || n == 1){
            return n;
        } else {
            return fibonacci(n-1) + fibonacci(n-2);
        }
    }

}
