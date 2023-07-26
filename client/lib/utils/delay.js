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

// 객체 합성 mixin

const defaultOptions = {
  shouldReject: false,
  timeout: 1000,
  data: '성공!',
  errorMessage: '알 수 없는 오류가 발생했습니다.',
}


function delayP(options) {
  
    let config = {...defaultOptions};

    if (typeof options === 'number') {
      config.timeout = options;
    }

    if (typeof options === 'object') {
      config = {...defaultOptions,...options}
    }
    const {shouldReject, timeout, data, errorMessage} = config;

    return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldReject) {
        resolve(data);
      } else {
        reject({message: errorMessage});
      }
    }, timeout);
  })
}

delayP({
  shouldReject: false,
})
.then((res)=>{
  // console.log(res);
})
.catch(({message})=>{
  console.log(message);
})
.finally(()=>{
  // console.log('어쨌든 실행');
})
