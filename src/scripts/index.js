//import '../styles/index.scss';

let els = document.getElementsByClassName('p1');
console.log(els);

let el = document.getElementById('first');
console.log(el);


/* 
	Location 
	

console.log(document.location.href);
*/


/*

Timers

*/



/*
let timeoutId = setTimeout(function() {
	console.log('1 second passed');
}, 1000);

//clearTimeout(timeoutId);

let intervalId = setInterval(function() {
	console.log('1 second passed');
}, 1000);

//clearInterval(intervalId);

*/

/*
//import {Car} from './car.js';

//year = 1956;

console.log(window.innerWidth);
*/
/*
import {Car} from './car.js';

let car = new Car(123);
console.log(car.id);
*/

/*
class Vehicle {
	constructor() {
		this.type = 'car';
	}
	start() {
		return `Starting: ${this.type}`;
	}
}


class Car extends Vehicle {
	constructor() {
		super();
	}	
	start() {
		return 'in Car start';
	}
}
let car = new Car();
console.log (car.start);
*/


/*
class Car {
	constructor(id) {
		this.id = id;
	}
	identify(suffix) {
		return `Car Id: ${this.id} ${suffix}`;
	}
}

let car = new Car(123);
console.log(car.identify('!!!'));
*/

/*
	class Car {
	constructor(id){
		this.id = id;
	}
}
let car = new Car();
car.id = 456;
console.log(car);
*/

/* OBJECTS and ARRAYS
let carIds = [
	{ carId: 123, style: 'sedan' },
	{ carId: 456, style: 'convertible'},
	{ carId: 789, style: 'sedan' }
];



carIds.forEach(car => console.log(car));
carIds.forEach((car,index) => console.log(car, index));

let convertibles = carIds.filter(
	car => car.style === 'convertible'
	
);
console.log(convertibles);

let result = carIds.every(
	car => car.carId > 0
	);
console.log(result);


let car = carIds.find(
	car => car.carId > 500
);
console.log(car);
*/
/*
let jsonIn =
`
 [
	 {"carId" : 123},
	 {"carId" : 456},
	 {"carId" : 789}
	]
`;

let carIds = JSON.parse(jsonIn);
console.log(JSON.stringify(carIds));
*/

/*
let carIds = [
	{ carId: 123 },
	{ carId: 456 },
	{ carId: 789 }
];

console.log(JSON.stringify(carIds));
*/

/*
let car = {
	id: 123,
	style: 'convertible'
};

console.log(JSON.stringify(car));
*/











/* ====
	
	Constructor Function
	
===== */
/*function Car(id){
	this.carId = id;
}
let car = new Car(123);
console.log(car.carId)
*/

/*
String.prototype.hello = function() {
	return this.toString() + ' Hello'
};
console.log('foo'.hello());
*/


/*

function Car(id) {
	this.carId = id;
}
Car.prototype.start = function() {
	console.log('start: ' + this.carId);
}
let car = new Car(123);
car.start();
*/


/*
function Car(id) {
	this.carId = id;
	this.start = function() {
		console.log('Start: ' + this.carId);
	};
	
}
let vehicle = new Car(123);
vehicle.start();
*/
/*
function Car(id) {
	this.carId = id;
	this.start = function() {
			console.log('start: ' + this.carId);
	};
}
let car = new Car(123);
car.start();
*/


/*
let car = new Car(123);
console.log(car.carId);
function Car(id) {
	this.carId = id;
}
let car = new Car(123);
console.log(car.carId);
*/
/* ====
	
	Functions and Scope 
	
===== */

/*(function () {
	console.log ('in function');
})();
*/




/*
let trackCar = function(carId, city='NY') {
	//console.log(´Tracking ${carId} in {$city}´);
	//console.log(ˋTracking ${carId} in {$city}.ˊ);
	console.log(`Tracking ${carId} in ${city}.`);
	//console.log(trackerCar(123));
};
console.log(trackCar(123));
console.log(trackCar(123, 'Chicago'));
*/

/*
let getId4 = _ => 123;
console.log(getId4());


let getId = prefix => prefix + 123;
console.log(getId('ID: '));

let getId2 = (prefix, suffix) => prefix + 123 + suffix;
console.log(getId2('ID: ', "!"));


let getId3 = (prefix, suffix) => {
	return prefix + 123 + suffix;
}
console.log(getId3('ID: ', '!'));
*/

/*
let o = {
	carId: 123,
	getId: function() {
		return this.carId;
	}
};

let newCar = {carId: 456};

let newFn = o.getId.bind(newCar);

console.log(newFn());
*/

/*

let o = {
	carId: 123,
	getId: function(prefix) {
		return prefix + this.carId;
	}
};
let newCar = {carId: 456};
console.log(o.getId.call(newCar, ['ID: ']));
*/

/*
let o = {
	carId: 123,
	getId: function() {
		return this.carId;
	}
};
let newCar = {carId: 456};
console.log(o.getId.call(newCar));
*/

/*
let o = {
	carId: 123,
	getId: function() {
		console.log(this);
		return this.carId;
	}
};

console.log(o.getId());
*/
/*
let fn = function() {
	console.log(this === window);
};
fn();
*/


/*
let app = (function() {
	let carId = 123;
	let getId = function() {
		return carId;
	};
	return {
		getId: getId
	};
})();
console.log(app.getId());
*/
/*
let app = (function(){
	let carId = 123;
	console.log ('in funciton');
	return {};
})();
*/

/*//var message = 'Outside';

if ( 5 === 5) {
	let message = 'Equal';
	console.log(message);
}	
console.log(message);

/*
function startCar(carId) {
	let message = 'Starting...';
	let startFn = function turnKey() {
		 let message = 'Override';
	}
	startFn();
	console.log(message);
}
startCar(123);
*/

/* ====
	
	OPERATORS 
	
	=== */

/*
let var1 = 100;
var1 >>=10;
console.log (var1);
*/


/*
console.log ( (5 > 3) ? 'yes' : 'no');
*/
/*
let s1 = 'Zoo';
let s2 = 'alphabet';

if (s1.toUpperCase() < s2.toUpperCase()) {
	console.log(true);
}
else {
	console.log(false);
}
*/

/*
let car = 'Ford';
	if (!car) {
		car = {car: 'Tesla'};
	}
console.log (car);
*/
/*
let userSettings = {name: 'Joe'};
let defaultSettings = { name: 'Default'};

console.log(userSettings || defaultSettings);
*/

/*
if (5 === 5 && 6 === 6){
	console.log(true);
}
else {
	console.log(false);
}
*/


/*
let var1 = 5;
let var2 = 100;
let var3 = 1;
if (var1 > 5 && var2 < 100) {
	console.log('True');
}
else {
	console.log('False');
}
*/
/*
if (var1 > 5 || var2 < 100) {
	console.log('True');
}
else {
	console.log('False');
}
*/
/*
if ((var1 > 5 && var2< 100)  || var3 != 3) {
	console.log("True");
}
else {
	console.log("False");
}
*/
/*
let var1 = 1;
let var2 = 1;

if (var1 == 1) {
	console.log('True');
}
else {
	console.log('False');
}	
*/


/*
for (let i=0; i<5; i++) {
	if ( i === 3) 
		continue;
		console.log(i);
	
}
*/

/*
function startCars(car1, car2, car3, ...rest) {
	console.log(car1, car2, car3, ...rest);
}
let carIds = [1, 2, 3, 4, 5, 6];
startCars(...carIds);
*/
/*
let car = {id: 5000, style: 'convertible'};
let id, style;

({id, style} = car);

console.log(id, style);
*/
/*
let carIds = [100, 200, 300, 500];
let car1, car2, theRest;

[car1, car2, ...theRest] = carIds;

console.log(car1, car2, theRest);
*/
/*
function sendCars(day, ...allCarIds) {
	 allCarIds.forEach(id => console.log(id));
}

sendCars ('Monday',100, 200, 555);
*/