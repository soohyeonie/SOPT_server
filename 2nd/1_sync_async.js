//Sync
console.log(1);
setTImeout(function(){
  console.log('first done!');
},10000);

console.log(2);
setTimeout(function(){
  console.log('second done!');
},5000);
console.log(3);

//Async
console.log(1);
setTimeout(function() {
  console.log('first done!');
  console.log(2);
  setTimeout(function() {
    console.log('second done!');
  },5000);
},10000);
