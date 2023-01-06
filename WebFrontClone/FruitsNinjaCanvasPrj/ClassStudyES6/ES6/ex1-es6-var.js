//=======================================
//선언은 하지만 다른곳에 선언

// console.log(a);
// let a = 3;

//=======================================
//backtick => Template String
{
  let year = 2014;
  let month = 12;
  let day = 10;
  let string = `${year}-${month}-${day}`;
  console.log(string);

  let className = "p-elect";
  let title = "스마트 폰";
  let product = String.raw`<section class = "${className}"\n\n>
              <h1>${title}</h1>
              </section>`; //어쩌면 이걸로 html을 제어할 수 있다면...?

  console.log(product); // \n그냥 출력하기 (String.raw OR \두번)
}
//=======================================
//개별 값 데이터를 JSON 객체에 담기
// 2. 객체의 Key 와 Value 가 동일하다면(변수화) 하나로 합칠 수 있다.
// 1. 객체의 키워드에 변수를 넣을 수 있다.
{
  let attName = "kor";

  let exam = {
    [attName]: 10,
    eng: 20,
    math: 30,
  };

  console.log(`kor:${exam.kor}`);
}
//=======================================
// Object Destructuring
{
  let exam = {
    kor: 10,
    eng: 20,
    math: 30,
    student: {
      name: "newlec",
      phone: "010-2222-3333",
    },
  };

  let {
    kor,
    eng: english,
    ma = 0,
    student: { name: nam, phone },
  } = exam; //객체의 속성명을 바꾸고싶다

  console.log(`${kor}`);
  console.log(`${english}`);
  console.log(`${nam}`);
  console.log(`${phone}`);
}

//=======================================

//2진 8진
// let const
// Json 초기화
// Destructuring

var fullname = function () {
  last = "park";

  return function (first) {
    return `${first}+${last}`;
  };
};
console.log(fullname()("size"));
console.log(last);
let last;

console.log(fullname()("size"));
