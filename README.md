# random-serial-value-generator

[![GitHub license](https://img.shields.io/github/license/mauvpark/random-value-generator)](https://github.com/mauvpark/random-value-generator/blob/main/LICENSE)

![npm](https://img.shields.io/npm/v/random-serial-value-generator)

## Description

This library generates a value randomly or you could get each value serially. Also, this lib is made with only javascript code so you could install it anywhere.

## How to install

```
// npm
npm install random-serial-value-generator
// yarn
yarn add random-serial-value-generator
// expo
expo install random-serial-value-generator
```

## Example

```js
import { RandomValueGenerator } from "random-serial-value-generator";

function example () {
    const randomGenerator = new RandomValueGenerator();
    // Random value
    randomGenerator.generate(["white", "black", "orange"], true); // returns a value like "black", "white", "black", "orange" etc... randomly
    // Serial value
    randomGenerator.generate(["white", "black", "orange"], false); // returns a value "white", "black", "orange", "white", "black", "orange" .... serially
}

// USE CASE
// This method is going to generate random backgroundColor each value of the list.
function component () {
    const randomGenerator = new RandomValueGenerator();
    const list = ["cat", "lion", "dog", "rabbit"];

    return (
        <div>
            {list.map((v,i) => 
                <div key={i} style={{backgroundColor: randomGenerator.generate(["white", "black", "orange"], true);}}>
                    {v}
                </div>
            )}
            /* Expected output: "cat": "white", "lion": "black", "dog": "orange", "rabbit": "white" */
            {list.map((v,i) => 
                <div key={i} style={{backgroundColor: randomGenerator.generate(["white", "black", "orange"], false);}}>
                    {v}
                </div>
            )}
        </div>
    );
}
```
