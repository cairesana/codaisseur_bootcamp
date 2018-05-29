# Academy notes

-- may, 28 --

### commandline basics

- ls - list of directories / files in the current working directory
- pwd - shows the path you are currently in.
- mkdir DIRECTORY_NAME - make a new directory in the current working DIRECTORY_NAME
- cd .. - change directory (go out of)
- touch FILE_NAME.EXTENSION - make files
atom . - open atom with the current working directory as the ' tree'
google-chrome FILE_NAME.html - linux open HTML file from commandine
open FILE_NAME.html - MAC open html file from commandline

### Running JS in the browser

1. make html file
2. (a) include script tag with JS // <script src=' '...
3. open HTML file

### Running JS from the commandline

- Node console - to see what the output of a JS expression  is (exemplo console.log eh uma JS expression)
``` bash
$ node
> console.log('hi')
```

--------------------------------------------------------------

// what do we remember about javascript syntax so far:

let myVariable;

// let myArray = [1, 2, 3]
myArray.push(4, 5) // adding elements to myArray

let someElementFromArray = myArray.pop() // removing elements
const someName = // you cant reassign the value with const
var anotherVariable;

// conditional statement
if (true) {
  // do one thing
} else {
  // do something else
}

// use a for loop to iterate over an array
for (var i=0, i < array.length; i++) {
  array[i]
}

//while loop
while (true) {
  // do something
}

let person = {
  name: 'ana'
}

class myParentClass {
  constructor
}

// comparison operator
// >, <, ==, ===,

// switch (expression) {
  case expression:

  break;
  default:
}


function functionName() {
  return 'something'
}

console.log('name');


data types:
- strings ('hello world')
- booleans (true / false)
- integer; (8)
- float (5.8 - same as double)
- undefined (it does not exists)
- null (without a value?)
- NaN (not a number)
- object  -> key: value
{
  name: 'ana',
  age: 30,
}
- array -> list
[ 'hello world', 'foo', 'bar']

### method

### window



### strings

- we can construct a string with "", '', ``

-using backsticks `` we cn interpolate values which looks like this:
```javascript
`${myVariable}`
```
- we can concatenate strings:
```javascript
'my string' + 'anotherstring' + variableForGoodMeasure
```

### string methods

`string.toUpperCase()`

```javascript
