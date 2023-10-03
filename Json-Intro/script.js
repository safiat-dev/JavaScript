const post = {
    id: 1,
    title: 'Post One',
    body: 'This is the body',

}
console.log(post);

// Convert to JSON String
const strr = JSON.stringify(post);
console.log(strr);

// Parse JSON
const obj = JSON.parse(strr);
console.log(obj);

