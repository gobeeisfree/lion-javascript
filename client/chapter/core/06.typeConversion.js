/* --------------------- */
/* Type Conversion       */
/* --------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2023;

console.log(typeof String(YEAR)); // 명시적 형 변환
console.log(typeof (YEAR + '')); // 암시적 형 변환

// undefined, null
let days = null;
console.log(typeof String(days));
console.log(typeof (days + ''));

let undef = undefined;
console.log(typeof String(undef));
console.log(typeof (undef + ''));

//boolean
let isClicked = true;
console.log(typeof String(isClicked));
console.log(typeof (isClicked + ''));

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined
let friend;
console.log(Number(friend));

// null
let bankbook = null;
console.log(Number(bankbook));

// boolean
let cutie = false;
console.log(Number(cutie));

// string
let num = '250';
console.log(Number(num));
console.log(+num);
console.log(num * 1);
console.log(num / 1);

// numeric string
let width = '105.3px';
console.log(Number(width));
let w = parseFloat(width, 10);
console.log(w);

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들

console.log(Boolean(friend));
console.log(Boolean(bankbook));
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(NaN));
console.log(Boolean(''));

console.log('암시적 형 변환 : ' + !!false);
