## Buzz Words

- defined => `var y = 4;`
- declared => `var x;`
- assigned => `= 4`
- invoked => something calls it
- immediately invoked function expression (IIFE) => Runs as soon as it is defined.
- expression => `x + y` OR `3 + 4`
- statment => `let y = 4 + 4`

## JS Syntax

---

### Arithmetic Operators

- ( `+` `-` `*` `/` `%` `**` `++` `--` )

### Assignment Operators

- ( `=` `+=` `-=` `*=` `/=` `%=` `**=` )

|---|---|---|
| `**=` | `x **= y`| `x = x ** y` |
|---|---|---|

### Comparison Operators

- ( `==` `===` `!=` `!==` `>` `<` `>=` `<=` `?` )

### Logical Operators

- ( `&&` `||` `!` )

### String Operators

- The `+` and `+=` operator is used to (concatenate) strings.

### Type Operators

- typeof
- instanceof

---

### JS Identifiers / Names

- Refers to JavaScript names.

### JS var

- can be used before declared.
- variables inside a block **can** be accessed from outside the block.

### JS Let

- cannot be redeclared in the same block.
- decalared before use.
- have block scope. iow => variables inside a block **cannot** be accessed from outside the block.

### JS Const

- cannot be redeclared.
- cannot be reassigned.
- have block scope.

## JS Hoisting

- Var => variables are hoisted to the top and initialzed which means that you can use it before its declared.
- Let and Const => variables are hoisted to the top but are not initialzed which means that you cannot use before its declared.

---

## Functions

### **Arrow Function - ES6**

```js
const functionOne = () => {};
```

### **Function Expression**

```js
const functionOne = function () {};
```

### **Function Declaration**

```js
function functionOne() {}
```

### **Immediately Invoked Function Expression - ES5**

```js
(functionOne(){

})();
```

### **Immediately Invoked Function Expression - ES6**

```js
const functionOne = (() => {})();
```

---

## 4. JS Strings

- EXAMPLE
- _`let stringVariable = 'Lorem Ipsum dol et.'`_

|---|---|---|---|
|length|`.length`|property|returns a number type.|
|slice|`.slice(start, end)`|method|| retruns a string.|

### String Properties

- `.length` property => returns a number type.

### String Methods

#### `slice()`

- `slice(start, end)` method => **returns** an extracted part of a string in **string type**.
- eg. stringVariable.slice(1,4)
  // 'ore'

- NOTE => if end argument is omitted the rest of the string is extracted.
- NOTE => if start arguement is negative the position is counted from the end of the string.

#### `substring()`

- `substring(start, end)` method => **returns** an extracted part of a string in **string type**.
- eg. stringVariable.slice(1,4)
  // 'ore'

- NOTE => cannot accept negative indexes.
