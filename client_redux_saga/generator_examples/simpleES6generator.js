
function* foo() {
  let a = yield 'a';
  console.log(`a: ${a}`);
  let b = yield 'b';
  console.log(`b: ${b}`);
  let c = yield 'c';
  console.log(`c: ${c}`);
  return "That's all folks!";
}



const iter = foo();
let yield1 = iter.next();
console.log('yield1: ' + JSON.stringify(yield1));
let yield2 = iter.next("Innovate");
console.log('yield2: ' + JSON.stringify(yield2));
let yield3 = iter.next("Now");
console.log('yield3: ' + JSON.stringify(yield3));
let yield4 = iter.next("!!!!!!");
console.log('yield4: ' + JSON.stringify(yield4));

