/********************************************************************************************************************************************/

class ESSixDemoStuff {	

    constructor(name, surname, email) {
        this.name = name;
		this.surname = surname;
		this.email = email;
    }

    sayName() {
        console.log(`Allegedly, my name is ${ this.name }!`);
    }

    sayNameAndSurname() {
		console.log(`Apparently, my full name is ${ this.name } ${ this.surname }!`);
    }
	
	sayNameAndSurnameAndEmail() {
		console.log(`Truthfully, my full name is ${ this.name } ${ this.surname } and my email address is ${ this.email }!`);
	}
	
	arrowAllTheThings() {
		console.log(this.name);
		console.log('Hi Bob!');
	}
}

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
	console.log(cheese());
}
catch(e) {
	console.log('Still couldn\'t find the cheese :(');
}

/********************************************************************************************************************************************/

var arrowAllTheThings = () => {
	console.log('Hey, the arrow function actually worked.');
}

arrowAllTheThings();

var numbers = [1,2,3,4,5,6,7,8,9,10];
var timesTwo = numbers.map((number) => number * 2);
console.log(timesTwo); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

var MoreArrows = function(myInfo) {  
  myInfo.arrowAllTheThings((response) => { myInfo.name = response;});
}

MoreArrows(new ESSixDemoStuff('Another', 'Test', 'anothertest@anothertestsite.com'));

/********************************************************************************************************************************************/

function destructureAllTheThings() {
	return ['Alpha', 'Beta', 'Charlie'];
}

var a, b, c;
[a, b, c] = destructureAllTheThings();
console.log(`A is ${ a }, B is ${ b } and C is ${ c }`);

var moreDestructuring = function ({
  vara: x,
  varb: {
    varb: {
      nested: b
    }
  }
}) {
  console.log(x, ...b);
};

moreDestructuring({ vara: "The alphabet starts with", varb: { varb: { nested: ["A", "B", "C"]}}});

/********************************************************************************************************************************************/

var slappedPeople;
var peopleToSlap = function(name, ...methods) {
	console.log(`Slapped "${ name }" with:`);
	methods.forEach(function(method) {
		//people.slapped[name].push(method);
		console.log(`	- ${ method }`);
	});
};

peopleToSlap('That guy', 'Wet Noodle');
peopleToSlap('This guy', 'Red Herring', 'Banana Skin');
peopleToSlap('Which guy', 'Drinks Coaster', 'Sack of Potatoes', 'Diarrhea');

var x = [1, 2];
var y = [3, 4];
x.push(...y);  // x is [1, 2, 3, 4]
console.log(x);

/********************************************************************************************************************************************/