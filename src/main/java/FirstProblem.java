public class FirstProblem {
    private int sum =0;
    public int result(){
        for(int i=0; i<1000; i++){
            if(i%3 == 0 || i%5 == 0){
                sum += i;
            }
        }
        System.out.println("Sum is " + sum);
        return sum;
    }
}
