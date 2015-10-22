# ES6

This is my first attempt to convert ES6 code back to ES5, so this readme might change as I go along.

## Technologies used

* Node
* npm
* babel

## Layout

* The ES6 code is in the src/app.es6 file.
* The converted code is in the lib/app.js file.
* It's set up so that the code will compile to the lib/ folder.

## Setup
If npm run compile doesn't work, you can try these steps to run the project:

1. In the root directory, install babel via npm: npm install -g babel
2. Execute the following command in the root directory to set the source and compiled directories: babel -d lib src

If npm run compile runs, you don't have to change anything.

## To execute the code:

1. Go to the lib folder.

2. Execute: node app.js