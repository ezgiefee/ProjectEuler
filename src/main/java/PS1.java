//Find the sum of all the multiples of 3 or 5 below 1000
public class PS1 {
    public static void main(String[] args) {
        result();
    }
    private static int sum =0;
    public static int result(){
        for(int i=0; i<1000; i++){
            if(i%3 == 0 || i%5 == 0){
                sum += i;
            }
        }
        System.out.println("Sum is " + sum);
        return sum;
    }
}
