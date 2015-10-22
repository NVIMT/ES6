/********************************************************************************************************************************************/

'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var ESSixDemoStuff = (function () {
	function ESSixDemoStuff(name, surname, email) {
		_classCallCheck(this, ESSixDemoStuff);

		this.name = name;
		this.surname = surname;
		this.email = email;
	}

	/********************************************************************************************************************************************/

	_createClass(ESSixDemoStuff, [{
		key: 'sayName',
		value: function sayName() {
			console.log('Allegedly, my name is ' + this.name + '!');
		}
	}, {
		key: 'sayNameAndSurname',
		value: function sayNameAndSurname() {
			console.log('Apparently, my full name is ' + this.name + ' ' + this.surname + '!');
		}
	}, {
		key: 'sayNameAndSurnameAndEmail',
		value: function sayNameAndSurnameAndEmail() {
			console.log('Truthfully, my full name is ' + this.name + ' ' + this.surname + ' and my email address is ' + this.email + '!');
		}
	}, {
		key: 'arrowAllTheThings',
		value: function arrowAllTheThings() {
			console.log(this.name);
			console.log('Hi Bob!');
		}
	}]);

	return ESSixDemoStuff;
})();

var esdemo = new ESSixDemoStuff('Test', 'Person', 'testperson@testpersonsite.com');
esdemo.sayName();
esdemo.sayNameAndSurname();
esdemo.sayNameAndSurnameAndEmail();

/********************************************************************************************************************************************/

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
	console.log(cheese());
} catch (e) {
	console.log('Still couldn\'t find the cheese :(');
}

/********************************************************************************************************************************************/

var arrowAllTheThings = function arrowAllTheThings() {
	console.log('Hey, the arrow function actually worked.');
};

arrowAllTheThings();

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var timesTwo = numbers.map(function (number) {
	return number * 2;
});
console.log(timesTwo); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

var MoreArrows = function MoreArrows(myInfo) {
	myInfo.arrowAllTheThings(function (response) {
		myInfo.name = response;
	});
};

MoreArrows(new ESSixDemoStuff('Another', 'Test', 'anothertest@anothertestsite.com'));

/********************************************************************************************************************************************/

function destructureAllTheThings() {
	return ['Alpha', 'Beta', 'Charlie'];
}

var a, b, c;

var _destructureAllTheThings = destructureAllTheThings();

var _destructureAllTheThings2 = _slicedToArray(_destructureAllTheThings, 3);

a = _destructureAllTheThings2[0];
b = _destructureAllTheThings2[1];
c = _destructureAllTheThings2[2];

console.log('A is ' + a + ', B is ' + b + ' and C is ' + c);

var moreDestructuring = function moreDestructuring(_ref) {
	var x = _ref.vara;
	var b = _ref.varb.varb.nested;

	console.log.apply(console, [x].concat(_toConsumableArray(b)));
};

moreDestructuring({ vara: "The alphabet starts with", varb: { varb: { nested: ["A", "B", "C"] } } });

/********************************************************************************************************************************************/

var slappedPeople;
var peopleToSlap = function peopleToSlap(name) {
	console.log('Slapped "' + name + '" with:');

	for (var _len = arguments.length, methods = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		methods[_key - 1] = arguments[_key];
	}

	methods.forEach(function (method) {
		//people.slapped[name].push(method);
		console.log('\t- ' + method);
	});
};

peopleToSlap('That guy', 'Wet Noodle');
peopleToSlap('This guy', 'Red Herring', 'Banana Skin');
peopleToSlap('Which guy', 'Drinks Coaster', 'Sack of Potatoes', 'Diarrhea');

var x = [1, 2];
var y = [3, 4];
x.push.apply(x, y); // x is [1, 2, 3, 4]
console.log(x);

/********************************************************************************************************************************************/