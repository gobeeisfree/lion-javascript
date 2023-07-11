/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// 함수 선언 → 화살표 함수 (표현)식
//                  rest parameter
let calcAllMoney = (a, b, ...args) => {

  // console.log(args);

  // let total = 0;
  // args.forEach((item) => {
  //   total += item;
  // })

  // return total;

  // return args.reduce(function(acc, item) {
  //   return acc + item;
  // }, 0)

  return args.reduce((acc, item) => acc + item, 0)

};


const result = calcAllMoney(1000, 500, 200, 2000);

// console.log(result);

// function Button() {

// }

// const a = Button()

// const b = new Button()

// Button()

// 화살표 함수와 this



const a = document.querySelector('nav li:nth-child(1) button');
const nav = document.querySelectorAll('nav li button');

// 일반함수 : 나를 호출한 대상을 this로 바인딩합니다.
// 화살표함수 : this를 바인딩하지 않음. 찾아야 한다면 내 부모(상위 컨텍스트)꺼 가져옵니다.

a.addEventListener('click',(e)=>{

  // e.currentTarget
  // this.classList.add('is-active');
  // console.log(this);

})


// a.addEventListener('click',function(){
//   a.classList.add('is-active');
// })
// a.addEventListener('click',function(){
//   a.classList.add('is-active');
// })
// a.addEventListener('click',function(){
//   a.classList.add('is-active');
// })


// nav.forEach((button)=>{
//   button.addEventListener('click',()=>{
//     // this.classList.add('is-active');
//     console.log(this);
//   })


// })


// 함수 선언문
function normalFunction() {
  // console.log(this);
}

window.normalFunction()

// 함수 표현식
const expressionFunction = function () {
  // console.log(this);
}

expressionFunction()

// 화살표 함수
const arrowFunction = ()=>{
  // console.log(this);
}


// 객체 안에서 this

// 객체의 메서드를 정의할 때는 화살표 함수보다 일반 함수가 더 좋은거 아닌가? "yes"
// 메서드 안에서 함수를 호출할 때는 화살표 함수가 더 좋은가? "yes"

const user = {
  total: 0,
  name: 'tiger',
  age: 32,
  address: '서울시 중랑구 면목동',
  grades: [80,90,100],
  totalGrades: function(){
    
    // const sayHi = () => {
    //   console.log(this);
    // }

    // sayHi()


    this.grades.forEach((item)=>{
      this.total += item
    })

    console.log(this.total);
  }
}



/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow; 

// repeat(text: string, repeatCount: number): string;
let repeat; 