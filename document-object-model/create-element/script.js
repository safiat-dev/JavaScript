const div = document.createElement('div');
div.className = 'my-element';
console.log(div);

div.id = 'my-element';
console.log(div);

div.setAttribute('title', 'My Element');
console.log(div);

// div.innerText = 'Hello World';

const text = document.createTextNode('Hello World');
div.appendChild(text);
console.log(div);

// document.body.appendChild(div);

document.querySelector('ul').appendChild(div);