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

| Property OR Method | Syntax    | Syntax type | Return value data type |
| ------------------ | --------- | ----------- | ---------------------- |
| length             | `.length` | property    | returns a number type. |

| Property OR Method | Syntax                   | Syntax type | Return value data type |
| ------------------ | ------------------------ | ----------- | ---------------------- |
| slice              | `.slice(start, end)`     | method      | returns a string type. |
| substring          | `.substring(start, end)` | method      | returns a string type. |
| substr             | `.substr(start, length)` | method      | returns a string type. |

| Property OR Method | Syntax                                              | Syntax type | Return value data type |
| ------------------ | --------------------------------------------------- | ----------- | ---------------------- |
| replace            | `.replace('string to replace', 'new string value')` | method      | returns a string type. |
| toUpperCase        | `.toUpperCase()`                                    | method      | returns a string type. |
| toLowerCase        | `.toLowerCase()`                                    | method      | returns a string type. |

#### `slice()`

- Returns an extracted string.
- Last parameter ommited results in the rest of the string being extracted.
- NOTE => If start paramater is negative the position is counted from the end of the string.

#### `substring()`

- Returns an extracted string.
- Last parameter ommited results in the rest of the string being extracted.
- NOTE => Cannot accept negative values.

### `substr()`

- Returns an extracted string.
- Last parameter ommited results in the rest of the string being extracted.
- NOTE => If start parameter is negative the position is counted from the end of the string.

<!--- Insert next table here -->

### `replace()`

- Replaces a specified value with another value in a string.
- Doesn't change a string but creates a new string.
- NOTE => Replaces only the first match.
- Replace all mathces with regular expressions `/g` flag or case-insensitive strings with the `/i`.
