# babel-plugin-babel-strip-test-func

Babel plugin stripping test-only function declarations

## Example

**In**

```js
// input code
let foo;

let __test__bar = () => {};

let __test__foo, foobar;

function __test__baz(){}
```

**Out**

```js
// output code
let foo;

let foobar;
```

## Installation

```sh
$ npm install babel-plugin-strip-test-func
```

## Options

### `regexp`

A regexp used to check identifier.

#### Example

```json
{
    "plugins": [
        [
            "strip-test-func",
            {
                "regexp": "^__foo__"
            }
        ]
    ]
}
```

**In**

```js
// input code
let foo;

let __foo__bar = () => {};

let __foo__foo, foobar;

function __foo__baz(){}
```

**Out**

```js
// output code
let foo;

let foobar;
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["strip-test-func"]
}
```

### Via CLI

```sh
$ babel --plugins strip-test-func script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["strip-test-func"]
});
```

## License

Copyright (c) 2018 Benjamin Van Ryseghem


The code is licensed under the MIT license (see [LICENSE](LICENSE)).
