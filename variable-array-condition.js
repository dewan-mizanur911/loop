var bottleColor = ['yellow'];
var waterQuantity = 1;
var isFull = false;

// Array
var items = ['bottle', 'mug', 'paper', 'pen'];
items.indexOf('paper');
items.push('envelope');
items.push('watch');
items.pop();
console.log(items);
// conditionals
if(items.length > 4){
    console.log('You have too many stuffs in your desk.');
}
else if (items.length == 4) {
    console.log('you have only 4 items.');
}
else{
    console.log('You have a clean desk.');
}