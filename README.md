# Coaching | SCTP in SE | Module 2 | React Week 2

<details>
<summary> 1. State vs Props</summary>
## 1. State vs Props

> **State** manages the data being displayed or used within the component.

> **Prop** enable passing of data from one component to another.

| Feature | When to Use| How to Use|
|-|-|-|
| Props   | To pass data and event handlers from parent to child components.                               | Define props in the child component and pass them from the parent component during rendering.   |
|         | For customizing child components from a parent component based on external data.              | `<ChildComponent propName="value" />` in the parent component.                                   |
|         | To control a component from outside, making the component reusable and encapsulated.         | Access via `props.propName` in the child component to use the passed value or function.         |
| State   | To manage changing data within a component, like user input, data fetching results, etc.      | Initialize state in a component using `useState` hook in functional components.                 |
|         | For data that changes over time and should trigger a re-render when updated.                 | `const [state, setState] = useState(initialState);` and update with `setState(newValue)`.       |
|         | To keep track of user actions, inputs, or any dynamic interactions within the component.     | Use state for local component state management, not intended to be passed to child components.  |

</details>

<details>
<summary>2. Passing by reference vs value</summary>

## 2. Passing by reference vs value

Primitive types in JavaScript are passed by value while object and array are passed by reference.

Primitive (string):
```js

let myDog = "Bobby";

let myCat = myDog;

myCat = "Cathy";

console.log(myDog); // prints "Bobby"

```

Object:

```js
let myDog = {
    name:"Bobby"
}

let myCat = myDog;

myCat.name = "Cathy";

console.log(myDog); // prints {name: "Cathy"}
```

The best illustration to describe the difference between passing by value vs reference:

<img src="https://www.mathwarehouse.com/programming/images/pass-by-reference-vs-pass-by-value-animation.gif" />

**Explanation**

Consider:
```js
const mySibling = 4;
```
When a variable (primitive or not) is created, the value is being stored in memory and a memory address (the reference) is allocated for it. For instance, `mySiblings` is given a value `4`. The memory address #123456 is being assigned to store `4`. When a variable is passed by reference, it is the address (#123456) instead of the value (4) that is being assigned to another variable. This means 2 variable may be pointing to the same memory address. Consider the same example again:

Passing by reference:
```js
let myDog = {
    name:"Bobby"
}

let myCat = myDog;

myCat.name = "Cathy";

// myDog and myCat is pointing to the same memory address #111222
```

Passing by value:

```js
let myDog = "Bobby";

let myCat = myDog;

myCat = "Cathy";

// myDog has memory address #444555 while myCat has memory address #666777
```

</details>

<details>
<summary> 3. useState Hook</summary>

## 3. `useState` hook

### 3.1 Declaring `useState` hooks

Importing and declaring state:
```js
// 1. Imports "useState" function
import React, { useState } from 'react';

const AddressComponent = () => {

    // Calls useState functions with default value and returns an array. Use array destructuring syntax to capture
    // A. address (the state value)
    // B. setAddress (a function provided to update state)
    const [address, setAddress] = useState("");

    return (
        <div>My Address: {address}</div>
    )
}

export default AddressComponent;

```

### 3.2 Updating a state

**New value NOT depending on existing value**

There are several ways to update state. The `setAddress` function accepts a value or a function.

When a state can be updated without depending on the current value:
```js
setAddress("My Address");
```

**New value depends on existing value**

Sometimes, the value you wish to set may depend on the current value. For instance, what if I wish to remove whitespace of a value using the [trim](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim) function?

```js
setAddress((prevState) => {
    return prevState.trim();
})
```

**Update a part of an object**

Declare an object as a state:

```js
import React, { useState } from 'react';

const AddressComponent = () => {

    const defaultAddress = {
        street:"Block 558 Ang Mo Kio Avenue 10",
        postal:"111111"
    };
    const [address, setAddress] = useState(defaultAddress);

    return (
        <div>My Address: {address.street} {address.postal}</div>
    )
}

export default AddressComponent;
```

Update a part of the object:

```js
    setAddress((prevState) => {
        return {
            ...prevState, 
            postal: "560558"
        }
    })
```

The above code snippet uses the [spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) to make a copy of the `prevState` because state object is immutable. This means, you cannot change the state of `prevState`. To make changes to it, you have to make a copy and change the copy of the state.

</details>
<details>
<summary> 4. Event Handler</summary>

## 4. Event Handlers

### 4.1 Demo on event handlers

In this example, the child component detect change in the input field and sends the data to the parent component using a function provided by the parent, passed to child via the prop. 

> Run `coaching-app` to see live example.

ParentComponent:
```js
import React, { useState } from 'react';
import ChildComponent from './ChildComponent'; // Assuming the file name is ChildComponent.js

function ParentComponent() {
  const [inputValue, setInputValue] = useState('');

  const handleInput = (value) => {
    setInputValue(value);
  };

  return (
    <div style={{border:"4px solid red", margin:"4px"}}>
      <h2>Parent Component</h2>
      <div>
        <strong>Input from Child:</strong> {inputValue}
      </div>
      <ChildComponent onInputChange={handleInput} />      
    </div>
  );
}

export default ParentComponent;
```

ChildComponent:
```js
import React, { useState } from 'react';

function ChildComponent({ onInputChange }) {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
    onInputChange(e.target.value); // Call the function passed from the parent
  };

  return (
    <div style={{border:"4px solid blue", margin:"4px", padding:"4px"}}>
      <h2>Child Component</h2>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
}

export default ChildComponent;
```

### 4.2 What is Higher Order Function

Either:
- A function that takes another function as argument
- Or, A function that returns a function
- Or both.
</details>
<details>
<summary>5. Arrow Functions Variation</summary>

## 5. Arrow Functions Variation

Below are three variations of arrow functions:

**Most verbose**
```js
const fetchMyName = (salutation) => {
    return `${salutation} Edison`;
}
```

**Less Verbose**
```js
const fetchMyName = (salutation) => `${salutation} Edison`;
```

**Least Verbose**
```js
const fetchMyName = salutation => `${salutation} Edison`;
```

**Least Verbose without Arg**
```js
const fetchMyName = () => "Mr Edison";
```
</details>


END