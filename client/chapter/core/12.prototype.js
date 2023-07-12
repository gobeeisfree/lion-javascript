/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우


// const animal = {
//   legs: 4,
//   tail: true,
//   stomach: [],
//   set eat(food) {
//     this.stomach.push(food);
//   },
//   get eat() {
//     return this.stomach;
//   }
// }


// const tiger = {
//   __proto__: animal,
//   pattern: '호랑이 무늬',
//   prey: '',
//   hunt(target) {
//     this.prey = target;
//     return `${target}에게 조용히 접근한다.`
//   }
// }


// const fox = {
//   __proto__: animal,
//   prey: '',
// }


// 함수는 두가지 일을 할 수 있다. (양면의 얼굴을 가지고 있음)

// 함수 이름 앞에 대문자로 시작하면 암묵적으로 생성자 함수이다.

// 일반 함수
function Button (name, age, email) {
  this.name = name;
  this.age = age;
  this.email = email;
}

function button() {
  
}

// 일반 함수를 실행한 값을 담고 있음.
const a = button()

// 생성자 함수 - 객체를 만들어줌
const b = new Button('선범', 32, 'tiger@naver.com')





// 생성자 함수 

function Animal() {
  this.stomach = [];
  this.legs = 4;
  this.tail = true;
  this.eat = function (food) {
    this.stomach.push(food);
  }
  this.printEat = function (food) {
    return this.stomach;
  }
}


const tiger = new Animal();


tiger.pattern = '호랑이 무늬';
tiger.hunt = function (target) {
  this.prey = target;
  console.log(`${target}에게 슬금 슬금 접근합니다.`);
}


const cat = new Animal();

cat.say = () => '야옹';

const fox = new Animal();
const wolf = new Animal();
const dog = new Animal();