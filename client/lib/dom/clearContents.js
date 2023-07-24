import { getNode } from "./getNode.js";


export const clearContents = node => {
  if (typeof node === 'string') node = getNode(node) 
  if (node.nodeName === 'INPUT' || node.nodeName === 'TEXTAREA') {
    node.value = ''
    return;
  }

  node.textContent = ''
}