const doIt = (x) => new Promise((resolve) => { 
	console.log('in doIt, x: ' + x);
	setTimeout(() => resolve(), 3000);
});

function *myGenerator() {
  console.log(1);
  let a = yield doIt('XXX');
  console.log("a: " + a); // NOTE 3 seconds will pass before next output
  let b = yield doIt('YYY');
  console.log("b: " + b);
  return 'hi';
}

let iterator = myGenerator();
iterator.next().value
.then(() => iterator.next('999'))
.then(() => { let c = iterator.next('000');
		console.log(JSON.stringify(c)); });

// output:
// 1
// in doIt, x: XXX
// a: 999
// in doIt, x: YYY
// b: 000
// {"value":"hi","done":true}