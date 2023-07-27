import { insertLast } from '../dom/index.js';

const URL = 'https://jsonplaceholder.typicode.com/users';

const defaultOptions = {
  method: 'GET',
  body: null,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

export const gobee = async (options) => {
  const { url, restOptions } = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };

  const response = await fetch(url, restOptions);

  if (response.ok) {
    response.data = await response.json();
  }
  return response;
};

gobee.get = (url, options) => {
  return gobee({
    url,
    ...options,
  });
};

gobee.post = (url, body, options) => {
  return gobee({
    method: 'POST',
    url,
    body: JSON.stringify(body),
    ...options,
  });
};

gobee.delete = (url, options) => {
  return gobee({
    method: 'DELETE',
    url,
    ...options,
  });
};

gobee.put = (url, body, options) => {
  return gobee({
    method: 'PUT',
    url,
    body: JSON.stringify(body),
    ...options,
  });
};

// const response = await gobee.get(`https://pokeapi.co/api/v2/pokemon/1`);

// const pokemon = response.data;
// console.log(pokemon);

// insertLast(
//   document.body,
//   `<div><img src="${pokemon.sprites['front_default']}" alt="" width="150px"/></div>`
// );


/* 
const response = await fetch('https://pokeapi.co/api/v2/pokemon/25')

if (response.ok) {
  const data = await response.json();
  console.log(data);
  console.log(data.sprites['front_default']);
  
  insertLast(document.body,`<img src="${data.sprites['front_default']}" alt="" />`)
  insertLast(document.body,`<img src="${data.sprites['front_shiny']}" alt="" />`)
}
 */
