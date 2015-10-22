/********************************************************************************************************************************************/

class ESSixDemoStuff {	

    constructor(name, surname, email) {
        this.name = name;
		this.surname = surname;
		this.email = email;
    }

    sayName() {
        console.log(`My name is ${ this.name }!`);
    }

    sayNameAndSurname() {
		console.log(`My full name is ${ this.name } ${ this.surname }!`);
    }
	
	sayNameAndSurnameAndEmail() {
		console.log(`My full name is ${ this.name } ${ this.surname } and my email address is ${ this.email }!`);
	}
}

/********************************************************************************************************************************************/

var numbers = [1,2,3,4,5];
var timesTwo = numbers.map(function (number) {
  return number * 2;
});
console.log(timesTwo); // [2, 4, 6, 8, 10]

/********************************************************************************************************************************************/

var esdemo = new ESSixDemoStuff('Test', 'Person', 'testperson@testpersonsite.com');
esdemo.sayName();
esdemo.sayNameAndSurname();
esdemo.sayNameAndSurnameAndEmail();

/********************************************************************************************************************************************/

var cheese = function letValue() {
	let letCheese = 'Cheesy!';
	return letCheese;
}

try {
	console.log(letCheese);
}
catch(e) {
	console.log('Couldn\'t find the cheese :(');
}

try {
	console.log(cheese);
}
catch(e) {
	console.log('Still couldn\'t find the cheese :(');
}

/********************************************************************************************************************************************/