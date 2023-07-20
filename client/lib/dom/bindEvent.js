import { getNode } from "./getNode.js";

export function bindEvent(node, type, handler) {
  if (typeof node === 'string') node = getNode(node);

  if (!(/\b(mouseenter|click|mousemove|mouseout|mouseover)\b/g).test(type)) {
    throw new TypeError('bindEvent의 두번째 인수는 유효한 이벤트 타입이어야 합니다.')
  }
  
  node.addEventListener(type, handler);

  return ()=> node.removeEventListener(type,handler);
}