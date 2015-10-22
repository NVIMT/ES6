# ES6

This is my first attempt to convert ES6 code back to ES5, so this readme might change as I go along.

If npm run compile doesn't work, you can try these steps to run the project:

1) In the root directory, install babel via npm: npm install -g babel
2) In the root directory, install traceur via npm: npm install -g traceur (not necessarily required)
3) Execute the following command in the root directory to set the source and compiled directories: babel -d lib src

If npm run compile runs, you don't have to change anything.

To execute the code:

1) Go to the lib folder.
2) Execute: node app.js