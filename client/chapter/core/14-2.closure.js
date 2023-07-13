



function earth() {
  
  let water = true;
  let apple = {
    founder: 'Steve Jobs',
    ceo: 'Tim Cook',
    priduct: ['iphone','macbook','macStudio','appleWatch']
  }
  let gravity = 10;


  return (value) => {
    // console.log(apple); 
    gravity = value;
    console.log(gravity);
  }


  // return tiger;
}

const ufo = earth();



const button = document.querySelector('button');


function handleClick() {
  
  let isClicked = true;
  
  return () => {

    if(isClicked) {
      document.body.style.backgroundColor = 'orange';
    } else {
      document.body.style.backgroundColor = 'transparent';
    }

    isClicked = !isClicked
  }

}

button.addEventListener('click', handleClick())


function useState(initValue) {
  
  let value = initValue;

  function read() {
    return value
  }

  function write(overValue) {
    value = overValue
  }

  return [read, write]
}

// setClick()
// const [click, setClick] = useState(true)