'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var ESSixDemoStuff = (function () {
	function ESSixDemoStuff(name, surname, email) {
		_classCallCheck(this, ESSixDemoStuff);

		this.name = name;
		this.surname = surname;
		this.email = email;
	}

	_createClass(ESSixDemoStuff, [{
		key: 'sayName',
		value: function sayName() {
			console.log('My name is ' + this.name + '!');
		}
	}, {
		key: 'sayNameAndSurname',
		value: function sayNameAndSurname() {
			console.log('My full name is ' + this.name + ' ' + this.surname + '!');
		}
	}, {
		key: 'sayNameAndSurnameAndEmail',
		value: function sayNameAndSurnameAndEmail() {
			console.log('My full name is ' + this.name + ' ' + this.surname + ' and my email address is ' + this.email + '!');
		}
	}]);

	return ESSixDemoStuff;
})();

var numbers = [1, 2, 3, 4, 5];
var timesTwo = numbers.map(function (number) {
	return number * 2;
});
console.log(timesTwo); // [2, 4, 6, 8, 10]

var esdemo = new ESSixDemoStuff('Test', 'Person', 'testperson@testpersonsite.com');
esdemo.sayName();
esdemo.sayNameAndSurname();
esdemo.sayNameAndSurnameAndEmail();

var cheese = function letValue() {
	var letCheese = 'Cheesy!';
	return letCheese;
};

try {
	console.log(letCheese);
} catch (e) {
	console.log('Couldn\'t find the cheese :(');
}

try {
	console.log(cheese);
} catch (e) {
	console.log('Still couldn\'t find the cheese :(');
}