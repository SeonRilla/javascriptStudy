
public class adss {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int[] numberOne = {100,90,80};
		int[] numberTwo = { 100, 90, 80, 60, 60,0,0,0,0 };
		double result1 = average(numberOne);
		double result2 = average(numberTwo);
		System.out.printf("문제 1번 > %.2f \n문제 2번 > %.2f",result1, result2);

	}

	public static double average(int[] arr) {
		// [배열 요소들]의 평균값 => length가 곧 데이터의 개수를 의미
		int total = 0;
		int num = arr.length;
		for (int i = 0; i < num; i++)
			total += arr[i];

		return total / (double)num;

	}
}

