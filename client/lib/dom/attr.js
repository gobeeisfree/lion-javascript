function getAttr(node, prop) {
  // 0. 넘어온 대상이 문자인지를 체크
  // 1. 체크 후 element node 로 변경해 줘야함!
  if (typeof node === 'string') {
    node = getNode(node)
  };
  return node.getAttribute(prop);
}




function setAttr(node, prop, value) {
  if (typeof node === 'string') {
    node = getNode(node);
  }
  if (typeof prop !== 'string') {
    throw new TypeError('setAttr 함수의 두번째 인수는 문자타입이어야 합니다.')
  }
  if (!node[prop] && prop !== 'class' && prop !== 'title') {
    node.dataset[prop] = value;
    return;
  }
  node.setAttribute(prop, value)
}




const arrowAttr = (node, prop, value) => !value ? getAttr(node, prop) : setAttr(node, prop, value);

function attr(node, prop, value) {
  // if (!value) {
  //   return getAttr(node, prop)
  // } else {
  //   setAttr(node, prop, value)
  // }
  return !value ? getAttr(node, prop) : setAttr(node, prop, value);
}