import getClasses from './getClasses.js';

console.log('Ran from index.js');
getClasses();

const obj = {
  a: 'alpha',
  b: 'bash',
};

const newObj = { ...obj, c: 'charlie' };

console.log(newObj);

// console.log(['a', 'b', 'c'].includes('a'));

document.body.innerHTML = 'Hello World';
