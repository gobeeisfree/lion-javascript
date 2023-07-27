/* global gsap */

import { attr, changeColor, delayP, getNode, gobee, renderEmptyCard, renderSpinner, renderUserCard } from "./lib/index.js";

// 'https://jsonplaceholder.typicode.com/users'

// 1. user를 가져오기
// 2. 함수 안으로 넣기
// 3. 유저 데이터 렌더링
//      - html template을 만든다.
//      - 유저 data를 넘겨주기
//      - insertLast 사용하기
// 4. 함수 분리하기


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

    const response = await gobee.get('https://jsonplaceholder.typicode.com/users');
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

  gobee.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
}

userCardInner.addEventListener('click',handleDelete)