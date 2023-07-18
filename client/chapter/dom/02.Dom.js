/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

// Document Object Model

const getFirst = getNode('.first')
console.log('getFirst:',getFirst);

const [firstEl, secondEl] = getNodes('span');
console.log(getNodes('span'));
console.log('firstEl:',firstEl);
console.log('secondEl:',secondEl);

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */
// - getElementById
const message = document.getElementById('message');
console.log('message:',message)

// - getElementsByTagName
// - getElementsByClassName

// - querySelector
const first = document.querySelector('.first');
console.log('first:',first)

// - querySelectorAll
const [firstSpan, secondSpan] = document.querySelectorAll('span');
console.log('firstSpan:',firstSpan);
console.log('secondSpan:',secondSpan);

// - closest: 인접한 상위 요소를 찾음, event delegation (이벤트 위임)에서 많이 사용.
const closest = first.closest('h1');
console.log('closest:',closest);


/* 문서 대상 확인 */
// - matches
const matches = first.matches('.first');
console.log('matches:',matches);

// - contains
const contains = first.contains(secondSpan);
console.log('contains:',contains);