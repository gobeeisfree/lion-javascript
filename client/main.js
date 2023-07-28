import { deleteStorage, getNode, getStorage, setStorage } from "./lib/index.js";


const textField = getNode('#textField')
const clearButton = getNode('button')

function handleTextField() {
  const value = this.value;
  setStorage('text',value)
}

function handleClearButton() {
  deleteStorage('text')
  textField.value = ''
}


function init() {
  getStorage('text').then((res)=>{
    textField.value = res;
  })
}

textField.addEventListener('input', handleTextField)
clearButton.addEventListener('click', handleClearButton)
window.addEventListener('DOMContentLoaded',init)