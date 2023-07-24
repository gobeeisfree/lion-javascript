import { getNode } from "../dom/index.js";

const cache = {};


export const memo = (key, callback) => {
  
  if (!callback) return cache[key];
  
  if (cache[key]) {
    console.warn(`${key}는 이미 캐시된 값이 존재합니다.`);
    return cache[key];
  }

  cache[key] = callback();
  console.log(cache);

}


memo('cube', () => getNode('#cube'))