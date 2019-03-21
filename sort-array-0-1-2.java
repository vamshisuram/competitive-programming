
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        for (int i = 0; i < t; i++) {
            int n = sc.nextInt();
            int[] arr = new int[n];
            for (int j = 0; j < n; j++) {
                arr[j] = sc.nextInt();
            }
            sortArr(arr, n);
        }
    }

    public static void sortArr(int[] arr, int n) {
        // since we know what kind of elements are there, we can just maintain a counter.
        int count0 = 0;
        int count1 = 0;
        int count2 = 0;
        for (int i = 0; i < n; i++) {
            if (arr[i] == 0) count0++;
            if (arr[i] == 1) count1++;
            if (arr[i] == 2) count2++;
        }
        for (int j = 0; j < n; j++) {
            if (count0 > 0) {
                arr[j] = 0;
                continue;
            } else if (count1 > 0) {
                arr[j] = 1;
                continue;
            }
            if (count2 > 0) {
                arr[j] = 2;
                continue;
            }
        }
        System.out.print(arr);
    }
}

