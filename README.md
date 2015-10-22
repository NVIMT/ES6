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
3. If babel fails, it might just be because those directories don't exist, so create them in the root folder.

If npm run compile runs, you don't have to change anything.

If you are on Windows, you can run the setup.cmd file in the scripts directory.

## To execute the code:

You can use either of the following methods to execute it in Node:

1. Go to the lib folder.
2. Execute: node app.js

If you are on Windows, run the execute.cmd file in the scripts folder.