import java.util.ArrayList;
import java.util.Arrays;
import java.util.Random;
import java.util.Scanner;

public class LottoRun {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Lotto lotto = new Lotto();
		lotto.printLottos();


	}

}

class Lotto1 {

	private int[] lottos = new int[6];
	private int lottoWeek = 1;

	public Lotto() {
		lottos = generateNumbers();
		bubbleSort();
	}

	private int[] generateNumbers() {
		Random random = new Random();// random객체 선언
		int index = 0; // 로또 배열 인덱스
		int[] tmpLottos = new int[6]; // 리턴시켜줄 로또 배열
		while (index < 6) {// 6개만 받기 위해 0 1 2 3 4 5 까지만 돈다
			int tmpLottoNum = random.nextInt(49) + 1; // 값 하나
			boolean isEqual = false;// 반복문 안에 반복문으로 인해 continue?? 사용할 방법
			for (int i = 0; i < index; i++) {// 배열중 로또번호 초기화 된 곳 까지만
				if (tmpLottos[i] == tmpLottoNum)// 같은값이 있다면
					isEqual = true; // true로 상태변경
				// 최대 6번 밖에 안돌아서 굳이 중간에 멈출 필요까지야?
			}

			if (isEqual) // 같은게 있다면
				continue;// 다시 입력받기
			else {// 중복되지 않으면
				tmpLottos[index] = tmpLottoNum; // 저장하고
				index++;
			} // index증가

		}
		return tmpLottos;
	}

	public void printLottos() {

		System.out.println(Arrays.toString(lottos));
	}

	private void bubbleSort() {
		for (int i = 0; i < 6; i++) {
			for (int j = 0; j < 6 - i - 1; j++) {
				int tmp = 0;
				if (lottos[j] > lottos[j + 1]) {
					tmp = lottos[j];
					lottos[j] = lottos[j + 1];
					lottos[j + 1] = tmp;
				}
			}
		}
	}

	public void reset() {
		this.lottos = generateNumbers();
		bubbleSort();
	}

	public void LottoPlay() {
		System.out.printf("제 %d회 로또 추첨을 시작하겠습니다!!\n", lottoWeek);
		Scanner sc = new Scanner(System.in);
		int count = 1;
		int lottoindex = 0;
		int matchCount = 0;
		int[] resultLotto = new int[6];

		LOOP: while (true) {
			System.out.printf("<%d>번째 공 뽑으시겠습니까?\n1>뽑기 2>마음졸이기\n 입력 :", count);
			int menuIndex = sc.nextInt();
			switch (menuIndex) {
			case 1:
				int tmp = getLottoNums();
				
				
				break LOOP;
			case 2:
				System.out.println("시간이 없어요!!");
				continue;
			default:
				System.out.println("메뉴를 잘못 고르셨군요! 다시 골라주세요");
				continue;

			}
		}

		
		
	}

	private int getLottoNums() {
		Random rand = new Random();
		int tmp = rand.nextInt(49) + 1;
		return tmp;
	}
	private boolean isSameLottoNums(int[] arr,int lottoNum) {
		boolean isSame;
		
		for(int i = 0 ; i < 6; i ++)
			if(arr[i] == lottoNum)
	}
}