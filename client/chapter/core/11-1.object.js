/* --------- */
/* Object    */
/* --------- */


/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /* css */`
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  position: 'fixed',
  zIndex: 10000,
  top: '50%',
  left: '50%',
  width: '60vw',
  maxWidth: '800px',
  height: '40vh',
  minHeight: '280px',
  transform: 'translate(-50%, -50%)',
};


// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = null;

// 중의적 표현 확인 필요
// authorization : 권한
// authentication : 인증

authUser = {
  uid: 'jekznkd-dknd-djnnf',
  name: 'gobee',
  email: 'gobeeisfree@gamil.com',
  isSignIn: true,
  permission: 'paid' // free | paid
}

// console.log(authUser);

// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

// console.log(authUser.uid);
// console.log(authUser.permission);
// console.log(authUser.email);


// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고 
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.

// console.log(authUser['uid']);
// console.log(authUser['email']);
// console.log(authUser['name']);


// 계산된 프로퍼티 (computed property)
let calculateProperty = 'phone'; // phone | tel




// class로 객체 만들기
// class User{
//   constructor(name, email) {
//     this.name = name;
//     this.email = email
//   }
// }

// const user2 = new User('명현')

// 함수로 객체 만들기


/* shortand property (단축 프로퍼티) */
function createUser(
  name,
  email,
  computedProp = 'phone',
  number = '010-0000-0000'
  ) {
  
  return {
    name,
    email,
    [computedProp] : number
  }

}

const user = createUser(
 'Myeonghyun',
 'KMH@naver.com',
 'tel',
 '010-1234-5678'
 );


// 프로퍼티 포함 여부 확인
// key in user
// 자신의 속성을 가지고 있는지

for (let key in user) {
  if ({}.hasOwnProperty.call(user, key)) {
    // console.log(key);
  }
}

// 프로퍼티 나열
// key만 모아놓은 배열. Object.keys()
let keyArray = Object.keys(authUser);
// value만 모아놓은 배열. Object.keys()
let valueArray = Object.values(authUser);

// console.log(keyArray);
// console.log(valueArray);

// getProp(object) - 함수 만들어 보기
function getProp(object) {

  if(typeof object !== 'object') {
    throw new Error('getProp함수의 매개변수는 객체 타입이어야 합니다.')
  }

  return Object.keys(object)
}

 
// getP(object) - 함수 만들어 보기
function getP (object) {
  let result = [];

  for (let key in object) {
    if({}.hasOwnProperty.call(object,key)) {
      result.push(key)
    }
  }

  return result;
}


// console.log(getProp(authUser));
// console.log(getP(authUser));


//            null           없앰
// 프로퍼티 제거(remove) or 삭제(delete)

// authUser.name = null;
// delete authUser.uid;
// console.log(authUser);

function removeProperty(object, key){

  if (typeof object !== 'object') {
    throw new Error('removeProperty함수의 첫번째 매개변수는 객체 타입이어야 합니다.')
  }
  
  if (key === 'all') {
    for (let key of getProp(object)) {
      object[key] = null;
    }
    
    return object;
  }
  
  object[key] = null;
  
  return object;
}

removeProperty(authUser, 'name')

function deleteProperty(object, key) {

  if(isEmptyObject(object)){
    return;
  }

  if (typeof object !== 'object') {
    throw new Error('deleteProperty함수의 첫번째 매개변수는 객체 타입이어야 합니다.')
  }

  delete object[key];
  
  return object;
}

deleteProperty(authUser, 'uid')

// console.log(authUser);


// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

const student = { name, email, authorization, isLogin }

// console.log(student);


// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...


// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject(object) {

  // return !(Object.keys(object).length);

  return getProp(object).length === 0 ? true : false;
}

// console.log(isEmptyObject(authUser));



/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */

//* 배열의 구조분해 할당: 순서가 정해져있다. 변수 이름을 바꿀 수 있다.

let color = ['#ff0000','#2b00ff','#00ff2f']

let [r, b ,g] = color;

for (let [key, value] of Object.entries(authUser)) {
  // console.log(key, value);
}


// const [a, b, c, d] = document.querySelectorAll('nav li button');

// a.addEventListener('click', () => {})
// b.addEventListener('click', () => {})
// c.addEventListener('click', () => {})
// d.addEventListener('click', () => {})

// console.log([a, b ,c, d]);


/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */

//* 객체의 구조분해 할당: 순서가 정해져있지 않다. 변수 이름을 바꿀 수 있다.

const salaries = {
  김씨: 50,
  나씨: 3000,
  박씨: 500,
  이씨: 700,
}

const {김씨, 나씨, 박씨, 이씨} = salaries;

// console.log(김씨);


function setElementCss(options){

  const {
    width:w,
    height:h = 10,
    overflow:o,
    color:c
  } = options;

  console.log(w, h);
}

const defaults = {
  width: 100,
  height: 200,
  overflow: false,
  color: 'orange'
}

setElementCss({
  color: 'red',
  overflow: true,
  width: 50,
})



