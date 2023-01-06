import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class ep0_2798 {
    public static void main(String[] args) throws IOException {

        BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(bf.readLine());

        int a = Integer.parseInt(st.nextToken());
        int  b = Integer.parseInt(st.nextToken());

        st = new StringTokenizer(bf.readLine());
        int[] cards = new int[a];
        for( int i = 0 ; i < a ; i++){
            cards[i] = Integer.parseInt(st.nextToken());
        }


        for(int i = 0 ; i < a;i++)
            for(int j = 0 ; j < a;j++)
                for(int i = 0 ; i < a;i++)

    }
}