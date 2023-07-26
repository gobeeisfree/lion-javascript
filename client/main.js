
import { gobee, xhrPromise } from "./lib/index.js";

const data = await gobee.get('https://jsonplaceholder.typicode.com/users')

// console.log(data);