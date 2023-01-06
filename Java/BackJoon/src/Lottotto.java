import java.util.ArrayList;
import java.util.Arrays;
import java.util.Random;
import java.util.Scanner;

public class Lottotto {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Lotto lotto = new Lotto();
		lotto.printLottos();


	}

}

class Lotto {

	private int[] lottos = new int[6];
	private int lottoWeek = 1;

	public Lotto() {
		lottos = generateNumbers();
	}

	private int[] generateNumbers() {
		Random random = new Random();// random객체 선언후 초기화
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
				index++;//인덱스 증가
			} // index증가

		}
		return tmpLottos;
	}

	public void printLottos() {

		System.out.println(Arrays.toString(lottos));
	}
}
