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
<summary> 2. useState Hook</summary>
## 2. `useState` hook

### 2.1 Declaring `useState` hooks

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

### 2.2 Updating a state

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
<summary> 3. Event Handler</summary>
## 3. Event Handlers

### 3.1 Calling a function 

### 3.2 Passing event handler (function) as props

### 3.3 What is Higher Order Function

Either:
- A function that takes another function as argument
- Or, A function that returns a function
- Or both.
</details>
<details>
<summary>4. Arrow Functions Variation</summary>
## 4. Arrow Functions Variation

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
<details>
<summary>5. Passing by reference vs value</summary>
## 5. Passing by reference vs value
</details>

END