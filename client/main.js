const input = document.querySelector('#todo');

let val = input.val;

input.addEventListener('input', () => {
  val = input.val;
  console.log(val === 'hello');
});

// console.log(input.val);

// input.classList.add('is-active')
// input.classList.remove('is-active')
