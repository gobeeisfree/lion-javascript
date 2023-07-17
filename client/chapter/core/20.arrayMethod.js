/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray

const isArray = data => Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'array';

function nomalIsArray(data){
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'array';
}


const isNull = data => Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'null';

function normalIsNull(data){
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'null';
}


const arr = [10,100,1000,10000];

const people = [
  {
    id:0,
    name:'김다연',
    profession:'프론트엔드 개발자',
    age:25,
    imageSrc:'MAksd23',
  },
  {
    id:1,
    name:'이현주',
    profession:'수영선수',
    age:40,
    imageSrc:'afdfakA',
  },
  {
    id:2,
    name:'김희소',
    profession:'물음표살인마',
    age:30,
    imageSrc:'fAKqi321',
  },
  {
    id:3,
    name:'김규민',
    profession:'래퍼',
    age:52,
    imageSrc:'AFGq3d23',
  },
  {
    id:4,
    name:'전진승',
    profession:'드라마평론가',
    age:18,
    imageSrc:'fQa15f3',
  },
]


/* 요소 순환 ---------------------------- */

// forEach

arr.forEach((item, index)=>{
  console.log(item, index);
})

people.forEach((item)=>{
  console.log();
})

const span = document.querySelectorAll('span')

// 이벤트 처리 할 때 이 방식이 제일 좋은가? no
// 이벤트 위임 event delegation 방식을 하는게 좋음

span.forEach((item, index)=>{
  console.log(item);

  item.addEventListener('click',function () {
    console.log(this, index);
  })
})


/* 원형 파괴 ----------------------------- */

// push
// pop
// unshift
// shift

// reverse
// arr.reverse()
// console.log(arr);

// splice
arr.splice(1,0,5,13)
console.log(arr);

// compare function
// 반환 값 < 0: a가 b보다 앞에 있어야 한다.
// 반환 값 = 0: a와 b의 순서를 바꾸지 않는다.
// 반환 값 > 0: b가 a보다 앞에 있어야 한다.

// sort
arr.sort((a, b)=> a - b)
console.log(arr);



/* 새로운 배열 반환 ------------------------ */

const user = ['선범', '효윤', '준석'];

// concat
// const newArray = arr.concat(user);
const newArray = [...arr, ...user, 'javascript', 'css'];
console.log(newArray);

// slice
const slice = arr.slice(2,5);
console.log('slice:',slice);

// toSorted
const toSorted = arr.toSorted((a, b) => b - a);
console.log('toSorted:',toSorted);

// toReversed
const toRevesed = arr.toReversed();
console.log('toRevesed:',toRevesed)

// toSpliced
const toSpliced = arr.toSpliced(2, 0 , 'javascript', 'css', 'react');
console.log('toSpliced:',toSpliced)

// map
const job = people.map((item,index)=>{
  return /* html */`
    <div class="userCard">
      <div class="imageField">
        <img src="" alt="" />
      </div>
      <span>이름: ${item.name}</span>
      <span>직업: ${item.profession}</span>
      <span>나이: ${item.age}</span>
    </div>
  `
})

// people 자료구조에서 나이만 모아놓은 배열이 필요하다. 가공처리 나이 -1 내보내기

const newAge = people.map((item)=>{
  return item.age -1;
})
console.log('newAge:',newAge)


job.forEach((item)=>{
  document.body.insertAdjacentHTML('beforeend',item);
})

console.log('job:',job)



/* 요소 포함 여부 확인 ---------------------- */

// indexOf
const indexOf = arr.indexOf(10);
console.log('indexOf:',indexOf)

// lastIndexOf
const lastIndexOf = arr.lastIndexOf(10);
console.log('lastIndexOf:',lastIndexOf)

// includes
const includes = arr.includes(1000);
console.log('includes:',includes)


/* 요소 찾기 ------------------------------ */

// find
const find = people.find((item) => {
  return item.id > 1;
})

console.log('find:',find);

// findIndex
const findIndex = people.findIndex((item) => {
  return item.profession === '드라마평론가'
})

console.log('findIndex:',findIndex)

/* 요소 걸러내기 --------------------------- */

// filter
const filter = people.filter((item)=>{
  return item.id > 2
})

console.log('filter:',filter)



/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce
const totalAge = people.reduce((acc,cur)=>{
  return acc + cur.age
}, 0)

console.log('totalAge:',totalAge)

const template = people.reduce((htmlCode,cur)=> htmlCode + `<div>${cur.name}</div>` ,'');


document.body.insertAdjacentHTML('beforeend',template);

// reduceRight



/* string ←→ array 변환 ------------------ */

const str = '봉석 윤진 예나 시연 진만 정아'

// split
const split = str.split(' ');
console.log('split:',split);

// join
const join = split.join('-');
console.log('join:',join);