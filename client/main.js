/* global gsap */

import { attr, changeColor, clearContents, delayP, getNode, gobee, renderEmptyCard, renderSpinner, renderUserCard } from "./lib/index.js";

// 'https://jsonplaceholder.typicode.com/users'

// [phase-1]
// 1. tiger 함수를 사용해서 user를 가져와 주세요.
// 2. 함수 안으로 넣기
// 3. 유저 데이터 랜더링 
//      - html template을 만든다. 
//      - 유저 data를 넘겨주기.
//      - inserLast 사용하기.
// 4. 함수 분리 하기 


// [phase-2]
// 1. 에러가 발생 했을 때 
// 2. empty svg를 생성하고 랜더링 해주세요 
// 3. 함수 분리


// [phase-3]
// json-server 구성
// data 설계
// get, delete 통신 localhost
// delete => 리랜더링(clear,render)


const userCardInner = getNode('.user-card-inner');

async function renderUserList() {

  renderSpinner(userCardInner)
  
  try {
    
    // await delayP(1000);

    gsap.to('.loadingSpinner', {
      opacity: 0,
      onComplete(){
        getNode('.loadingSpinner').remove()
      },
    })

    const response = await gobee.get('http://localhost:3000/users');
    const userData = response.data;
    
    userData.forEach( item => renderUserCard(userCardInner, item) );
    changeColor('.user-card');
  
    gsap.to('.user-card', {
      x: 0,
      opacity: 1,
      stagger: 0.2
    })
  } catch (error) {
    renderEmptyCard(userCardInner)
  }
}

renderUserList();

// 버튼을 클릭 했을 때 해당 article의 id 값을 가져옴.

// - 이벤트 위임
// - button 선택하기 -> 클릭한 대상의 가장 가까운


async function handleDelete(e) {
  const button = e.target.closest('button')
  const article = e.target.closest('article')

  if (!article || !button) return;
  const id = attr(article, 'data-index').slice(-1);

  gobee.delete(`http://localhost:3000/users/${id}`)
  .then(()=>{
    // 컨텐츠 항목 전체 지우기
    clearContents(userCardInner);
    renderUserList();
  })
}

userCardInner.addEventListener('click',handleDelete)