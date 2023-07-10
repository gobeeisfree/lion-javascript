/* ---------------- */
/* For In Loop      */
/* ---------------- */



const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2023,
  // hasOwnProperty() {
  //   return '이게 된다고..?'
  // }
};

const key = 'nickname';


// 객체의 속성(pvoperty) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?


// Object.prototype을 직접 수정하는건 권장하지 않음
Object.prototype.nickname = 'tiger';


// 객체 자신의 속성인지 확인하는 방법
// - "자신(own)의 속성(property)을 가지고있는지(has) 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?

// console.log(javaScript.hasOwnProperty(key));

// console.log(Object.prototype.hasOwnProperty.call(javaScript, key));



// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
for (let key in javaScript) {

  if ({}.hasOwnProperty.call(javaScript, key)) {

  console.log(key);

  }
}


// - 배열 객체 순환에 사용할 경우?
// 권장하지 않음 forEach 또는 for...of를 권장.
const tens = [10, 100, 1000, 10000];

for (let key in tens) {
  console.log(tens[key]);
}
