/* ---------------- */
/* Switch           */
/* ---------------- */

const MORNING = '아침',
      LUNCH = '점심',
      DINNER = '저녁',
      NIGHT = '밤',
      LATE_NIGHT = '심야',
      DAWN = '새벽';

let thisTime = MORNING;

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

switch (thisTime) {
  // 조건 유형(case): '아침'
  // '뉴스 기사 글을 읽는다.'
  case MORNING:
    console.log('뉴스 기사 글을 읽는다.');
    break;
  // 조건 유형(case): '점심'
  // '자주 가는 식당에 가서 식사를 한다.'
  case LUNCH:
    console.log('자주 가는 식당에 가서 식사를 한다.');
    break;
  // 조건 유형(case): '저녁'
  // '동네 한바퀴를 조깅한다.'
  case DINNER:
    console.log('동네 한바퀴를 조깅한다.');
    break;
  // 조건 유형(case): '밤'
  // '친구에게 전화를 걸어 수다를 떤다.'
  case NIGHT:
    console.log('친구에게 전화를 걸어 수다를 떤다.');
    break;
  // 조건 유형(case): '심야'
  // 조건 유형(case): '새벽'
  // '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'
  case LATE_NIGHT:
  case DAWN:
    console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
    break;
}

/* switch문 → if문 변환 --------------------------------------------------- */

if (thisTime === MORNING) {
  console.log('뉴스 기사 글을 읽는다.');
} else if (thisTime === LUNCH) {
  console.log('자주 가는 식당에 가서 식사를 한다.');
} else if (thisTime === DINNER) {
  console.log('동네 한바퀴를 조깅한다.');
} else if (thisTime === NIGHT) {
  console.log('친구에게 전화를 걸어 수다를 떤다.');
} else {
  console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
}

/* switch vs. if -------------------------------------------------------- */

// 1. 랜덤한 수를 생성
// 2. 조건비교 switch case
// 3. 해당 결괏값을 출력

// 함수 만들기 -> 쪼갬
function getRandom(n) {
  return Math.floor(Math.random() * n);
}

function getDay(dayValue) {
  switch (dayValue) {
    case 0: return '일';
    case 1: return '월';
    case 2: return '화';
    case 3: return '수';
    case 4: return '목';
    case 5: return '금';
    case 6: return '토';
  }
}

// 요일을 출력하는 함수
// 요일을 가지고 주말이냐 아니냐? isWeekend 함수를 만들기

function isWeekend(dayValue) {
  const today = getDay(getRandom(dayValue));
  console.log(today);
  return today.includes('토') ? '토요일' : today.includes('일') ? '일요일' : '평일';
  // if (today === '토' || today === '일') {
  //   return true;
  // } else {
  //   return false;
  // }
}

const today = isWeekend(7);

console.log(today);
