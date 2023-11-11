let output;

// document.all is deprecated
output = document.all;
console.log(output);

output = document.all[11];
console.log(output);

output = document.all.length;
console.log(output);

// Everything in the html tags
output = document.documentElement;
console.log(output);

// Head and body tags
output = document.head;
console.log(output);

output = document.body;
console.log(output);

// HTMLCollection of everything in head/body
output = document.head.children;
console.log(output);

output = document.body.children;
console.log(output);

// Random properties
output = document.doctype;
console.log(output);

output = document.domain;
console.log(output);

output = document.URL;
console.log(output);

output = document.characterSet;
console.log(output);

output = document.contentType;
console.log(output);

// Get all forms
output = document.forms;
console.log(output);

output = document.forms[0];
console.log(output);

output = document.forms[0].id;
console.log(output);

output = document.forms[0].method;
console.log(output);

output = document.forms[0].action;
console.log(output);

// Change a form id
document.forms[0].id = 'new-id';

// Get all links
output = document.links;
console.log(output);

output = document.links[0];
console.log(output);

output = document.links[0].href;
console.log(output);

output = document.links[0].href = 'https://facebook.com';
console.log(output);

output = document.links[0].id = 'google-link';
console.log(output);

output = document.links[0].className = 'google-class';
console.log(output);

output = document.links[0].classList;
console.log(output);

// Get all images
output = document.images;
console.log(output);

output = document.images[0];
console.log(output);

output = document.images[0].src;
console.log(output);

// Turn an HTMLCollection into an array
const forms = Array.from(document.forms);
console.log(output);

forms.forEach((form) => console.log(form));
console.log(output);