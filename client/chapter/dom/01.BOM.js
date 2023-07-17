/* ------------------------------ */
/* Browser Object Model           */
/* ------------------------------ */

/*
JavaScript가 작동하는 플랫폼은 호스트(host)라고 불립니다. 
호스트는 브라우저, 웹서버, 심지어는 커피 머신이 될 수도 있습니다. 

각 플랫폼은 해당 플랫폼에 특정되는 기능을 제공하는데, JavaScript 명세서에는 
이를 호스트 환경(host environment) 이라고 부릅니다.

호스트 환경은 JavaScript 코어에 더해 플랫폼에 특정되는 객체와 함수를 제공합니다. 
웹 브라우저는 웹 페이지를 제어하기 위한 수단을 제공하고, Node.js는 서버를 포함해 
애플리케이션 개발에 필요한 다양한 기능을 제공합니다.

브라우저 객체 모델(Browser Object Model, BOM)은 문서 이외의 모든 것을 
제어하기 위해 브라우저(호스트 환경)가 제공하는 추가 객체를 나타냅니다.
*/


/* Window 객체 ----------------------------------------------------------- */

const { alert, confirm, prompt, setTimeout, setInterval } = window;

console.log(1);
const timer = setTimeout(() => {
  console.log(2);
}, 5000);
console.log(3);
clearTimeout(timer)

const cancelInterval = setInterval(() => {
  console.log('이 코드는 0.1초마다 실행되는 코드입니다.');
}, 100);

setTimeout(() => {
  clearInterval(cancelInterval)
}, 5000);


/* Location 객체 --------------------------------------------------------- */
// http://localhost:3000/index.html?type=listing&page=2#title

const { href, protocol, host, port, pathname, search, hash, replace, reload } = location;

console.log('href:',href)
console.log('protocol:',protocol);
console.log('host:',host);
console.log('port:',port);
console.log('pathname:',pathname)
console.log('search:',search);
console.log('hash:',hash);

const urlParams = new URLSearchParams(location.search);

for (const [key, value] of urlParams) {
  console.log(`${key}: ${value}`);
}


/* Navigator 객체 -------------------------------------------------------- */

const { platform, userAgent, language, onLine, geolocation } = navigator;

// platform: 브라우저가 실행되는 플랫폼 정보를 반환
console.log('platform:',platform);

// userAgent: 브라우저와 운영체제 정보를 반환
console.log('userAgent:',userAgent);

function browserName() {
  const agent = userAgent.toLowerCase();
  let browserName;
  switch (true) {
    case agent.indexOf('edge') > -1:
      browserName = 'MS edge';
      break;
    case agent.indexOf('opr') > -1:
      browserName = 'Opera';
      break;
    case agent.indexOf('chrome') > -1:
      browserName = 'Chrome';
      break;
    case agent.indexOf('trident') > -1:
      browserName = '🤬IE ?';
      break;
    case agent.indexOf('firefox') > -1:
      browserName = 'Mozilla Firefox';
      break;
    case agent.indexOf('safari') > -1:
      browserName = 'Safari';
      break;

    default:
      browserName = 'other';
      break;
  }
  return browserName;
}
browserName();

// 브라우저에서 사용되는 언어를 반환
console.log('language:',language)

// 브라우저가 온라인인지 여부를 반환
console.log('onLine:',onLine)

// 현재 위치 정보를 반환
console.log('geolocation:',geolocation)
function geoLocationPosition() {

  return new Promise((resolve, reject)=>{
    
    geolocation.getCurrentPosition((data)=>{

      if (!data) {
        reject({message: '위치 서비스를 활성화 해주세요.'});
      } else {
        const {latitude, longitude} = data.coords;
        resolve ({latitude, longitude})
      }

    })
  })
  
}


/* Screen 객체 ----------------------------------------------------------- */

const { width, height, availWidth, availHeight, orientation } = screen;

// 모니터 사이즈
console.log('width:',width)
console.log('height:',height)

// 브라우저의 크기
console.log('availWidth:',availWidth)
console.log('availHeight:',availHeight)

// Screen 객체와 별도로 브라우저 해상도 크기
console.log('innerWidth:',innerWidth)
console.log('innerHeight:',innerHeight)

// 출력 화면의 방향
console.log('orientation:',orientation.type) // landscape-가로, portrait-세로



/* History 객체 ---------------------------------------------------------- */

const { back, forward, go, length, pushState, replaceState } = history;


navigator.mediaDevices.getUserMedia({video:true}).then((stream)=>{

  document.querySelector('#videoElement').srcObject = stream;
  
})