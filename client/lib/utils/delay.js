import { getNode } from "../dom/index.js";

function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}

const first = getNode('.first');
const second = getNode('.second');

/* 
delay(()=>{
  console.log(1);
  first.style.top = '-100px';
  second.style.top = '100px';
  delay(()=>{
    console.log(2);
    first.style.transform = 'rotate(-360deg)';
    second.style.transform = 'rotate(360deg)';
    delay(()=>{
      console.log(3);
      first.style.top = '0px';
      second.style.top = '0px';
    });
  })
},0);
 */


function delayP() {
  
  return new Promise((resolve, reject) => {
    resolve('성공입니다!');
  })
}

delayP()
.then(result => console.log(result))