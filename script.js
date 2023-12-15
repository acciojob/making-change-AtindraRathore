const makeChange = (c) => {
  // your name here
		let quarters = Math.floor(c/25);
	c=c%25;
	console.log(c);
	let dime = Math.floor(c/10);
	c=c%10;
	console.log(c);
	let nickel = Math.floor(c/5);
	c=c%5;
	console.log(c);
	let penny = c;
	let result = {
		p:penny,
		n:nickel,
		q:quarters,
		d:dime
	}
	return result;
};

// Do not the change the code below
// const c = prompt("Enter c: ");
// alert(JSON.stringify(makeChange(c)));
