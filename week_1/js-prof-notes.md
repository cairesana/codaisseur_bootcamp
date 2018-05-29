## Academy Notes

### Commandline basics
|command| used for|
|--------------|-------------|
|`ls` |  list of directories / files in the current working directory  
|`mkdir DIRECTORY_NAME` |  Make a new directory in the current working directory  
|`cd NAME_OF_DIRECTORY`| - change directory (go into)  
|`cd ..`| - change directory (go out of)  
|`touch FILE_NAME.EXTENSION`| - make files  
|`atom .`| - Open atom with the current working directory as the `tree`  
|`google-chrome FILE_NAME.html`| - Linux open HTML file from commandline  
|`open FILE_NAME.html`| - MAC open HTML file from commandline  

### Running JS in the browser

1. Make HTML file  
2. (a) Include script tag with JS  
2. (b) Make separate JS file Include a script tag with a `src` attribute  
3. Open HTML file  

### Running JS from the commandline

- Node console - to see what the output of a JS expression is
```bash
$ node
> console.log('hi')
```


### Method

A method is a function defined inside and object

### Window methods
`window.alert()` - create a popup with a message  
`window.prompt()` - prompt the user

### Document methods

`document.write()` -  write a string to the console

### Strings

Stuff we learnt

- We can construc a strings with `"", '', ```
- Using backticks we can `interpolate` values which looks like this

```javascript
`${myVariable} keeps the formatting in an easy way`
```
- We can `concatinate` Strings

```javascript
'my string' + 'anotherstring' + variableForGoodMeasure
```

#### String methods

`string.toUpperCase()`

### Numbers

Beware of different data-types
```javascript
6
'6' + '11'
parseInt('6') // 6
```
